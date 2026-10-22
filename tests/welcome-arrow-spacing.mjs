// Focused regression: npm package playwright must be available, or set PLAYWRIGHT_MODULE.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'node:http';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(import.meta.dirname,'..');
const out=process.env.OUTPUT_DIR||'/tmp/anpdf-arrow-check';await fs.mkdir(out,{recursive:true});
const server=createServer(async(req,res)=>{try{let f=path.join(root,decodeURI(new URL(req.url,'http://local').pathname));if((await fs.stat(f)).isDirectory())f=path.join(f,'index.html');const mime={'.html':'text/html','.css':'text/css','.woff2':'font/woff2','.png':'image/png'};res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(await fs.readFile(f));}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base=process.env.BASE_URL||`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({headless:true,channel:'chrome'}),results=[];
try{for(const width of (process.env.WIDTHS||'1440,721,720,390,320').split(',').map(Number)){
 const context=await browser.newContext({viewport:{width,height:1000},deviceScaleFactor:1});
 const page=await context.newPage();await page.emulateMedia({reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>errors.push(r.url()));
 await page.addInitScript(()=>{window.longTasks=[];new PerformanceObserver(l=>window.longTasks.push(...l.getEntries().map(e=>e.duration))).observe({type:'longtask',buffered:true});});
 const response=await page.goto(base+'/welcome/fr/',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 const checks=await page.evaluate(()=>{
  const rect=e=>e.getBoundingClientRect();
  const labels=[...document.querySelectorAll('.menu-heading,.menu-note,.menu-description,.extension-row>span:not(.pin-target),.menu-footer,.pin-note,.ghost-brand,.preview-brand,.preview-description,.preview-drop')];
  const textBoxes=labels.flatMap(el=>{const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),boxes=[];while(w.nextNode()){if(!w.currentNode.textContent.trim())continue;const range=document.createRange();range.selectNodeContents(w.currentNode);boxes.push(...[...range.getClientRects()].map(r=>({x:r.x,y:r.y,right:r.right,bottom:r.bottom,text:el.textContent.trim()})));}return boxes;});
  const arrows=[...document.querySelectorAll('.guide-arrow')].map(svg=>{
   const target=svg.closest('.toolbar-target,.pin-target'),r=rect(target),f=rect(svg.closest('figure')),badge=rect(target.querySelector('.callout'));
   const cx=r.x+r.width/2,cy=r.y+r.height/2,style=getComputedStyle(target),radius=r.width/2+parseFloat(style.outlineOffset)+parseFloat(style.outlineWidth);
   const paths=[...svg.querySelectorAll('path,polygon')],polygon=svg.querySelector('polygon'),m=paths[0].getScreenCTM(),halfStroke=polygon?0:parseFloat(getComputedStyle(svg).strokeWidth)*Math.hypot(m.a,m.b)/2;
   const pts=paths.flatMap(p=>Array.from({length:401},(_,i)=>{const q=p.getPointAtLength(p.getTotalLength()*i/400);return new DOMPoint(q.x,q.y).matrixTransform(p.getScreenCTM());}));
   if(polygon)pts.push(...[...polygon.points].map(p=>new DOMPoint(p.x,p.y).matrixTransform(m)));
   const shaft=paths[0],q=polygon?[...polygon.points].find(p=>p.x===196&&p.y===48):shaft.getPointAtLength(shaft.getTotalLength()),tip=new DOMPoint(q.x,q.y).matrixTransform(m);
   const approvedShape=Boolean(polygon&&polygon.points.length>10&&getComputedStyle(polygon).fill===getComputedStyle(svg).color&&getComputedStyle(polygon).stroke==='none'&&svg.querySelectorAll('path').length===0);
   const gap=Math.min(...pts.map(p=>Math.hypot(p.x-cx,p.y-cy)-radius-halfStroke));
   const badgeGap=Math.min(...pts.map(p=>Math.hypot(p.x-(badge.x+badge.width/2),p.y-(badge.y+badge.height/2))-badge.width/2-3-halfStroke));
   const collisions=textBoxes.filter(b=>pts.some(p=>p.x+halfStroke>b.x&&p.x-halfStroke<b.right&&p.y+halfStroke>b.y&&p.y-halfStroke<b.bottom)).map(b=>b.text);
   return {approvedShape,gap,badgeGap,upperLeft:tip.x<cx&&tip.y<cy,contained:pts.every(p=>p.x-halfStroke>=f.x&&p.x+halfStroke<=f.right&&p.y-halfStroke>=f.y&&p.y+halfStroke<=f.bottom),collisions};
  });
  return {arrows,overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].every(i=>i.complete&&i.naturalWidth>0),geometry:[...document.querySelectorAll('figure,.extension-menu,.pin-note,.toolbar-target,.pin-target,.callout')].map(e=>{const r=rect(e);return{selector:e.className,x:r.x,y:r.y,w:r.width,h:r.height}}),text:document.body.innerText,scripts:document.scripts.length,loadMs:performance.getEntriesByType('navigation')[0].loadEventEnd,heap:performance.memory?.usedJSHeapSize,longTasks:window.longTasks};
 });
 const pass=response.status()===200&&!errors.length&&!checks.overflow&&checks.images&&checks.arrows.length===3&&checks.arrows.every(a=>a.approvedShape&&Math.abs(a.gap-8)<.2&&a.badgeGap>=8&&a.upperLeft&&a.contained&&!a.collisions.length);
 results.push({width,pass,errors,...checks});await page.screenshot({path:`${out}/fr-${width}.png`,fullPage:true});await context.close();
}}finally{await browser.close();await new Promise(r=>server.close(r));}
await fs.writeFile(out+'/results.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results.map(({text,geometry,...r})=>r),null,2));
if(results.some(r=>!r.pass))process.exitCode=1;
