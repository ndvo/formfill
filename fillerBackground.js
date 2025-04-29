browser.commands.onCommand.addListener(function(command) {
  if(command === 'fill-form') {
    browser.tabs.query({ active: true, currentWindow: true })
      .then((tabs)  => {
        if (!tabs.length) return;
        const activeTab = tabs[0];
        browser.tabs.executeScript(tabs[0].id, {
          file: 'fillerRuntime.js'
        });
      })
  }
});
