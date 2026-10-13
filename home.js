(() => {
  const dialog = document.querySelector('#install-dialog');
  // Add the verified store URL here after publication. Until then, the owner-approved dialog is used.
  const storeURL = '';
  document.querySelectorAll('[data-install]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      if (storeURL) { window.location.assign(storeURL); return; }
      dialog.showModal();
    });
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });

  const hero = document.querySelector('.hero-example');
  const heroImage = hero.querySelector('[role="img"]');
  const heroDescription = heroImage.getAttribute('aria-label');
  hero.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', () => {
      hero.dataset.view = button.dataset.view;
      hero.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      heroImage.setAttribute('aria-label', button.dataset.view === 'annotated' ? heroDescription : 'Original example PDF with a launch date and no annotations.');
    });
  });

  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const toolImage = document.querySelector('.tool-example');
  const descriptions = {highlight:'Document example with the launch date highlighted.',note:'Document example with a text note asking to confirm the launch date.',point:'Document example with a rectangle framing the launch date.'};
  const selectTab = tab => {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    toolImage.dataset.tool = tab.dataset.tool;
    toolImage.setAttribute('aria-label', descriptions[tab.dataset.tool]);
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); selectTab(tabs[next]); tabs[next].focus();
    });
  });

  const workflow = document.querySelector('.workflow-demo');
  const result = workflow.querySelector('[role="img"]');
  const exportDescription = result.getAttribute('aria-label');
  document.querySelectorAll('.steps button').forEach(button => {
    button.addEventListener('click', () => {
      workflow.dataset.step = button.dataset.step;
      document.querySelectorAll('.steps button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      result.setAttribute('aria-label', button.dataset.step === 'download' ? exportDescription : button.dataset.step === 'open' ? 'Original example PDF before annotation.' : 'Example document with highlight and note, ready to download.');
    });
  });
  document.querySelectorAll('.interactive').forEach(element => { element.hidden = false; });
})();
