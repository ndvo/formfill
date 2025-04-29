

fillAllFields();

function fillAllFields() {
  const elements = document.querySelectorAll('input, select, textarea');
  elements.forEach(fillElement);
}

function fillElement(el) {
  const values = {
  };

  const fieldName = el.name || el.id;
  if (fieldName && values[fieldName]) {
    switch(el.type) {
      case 'checkbox':
      case 'radio':
        el.checked = values[fieldName];
      case 'select-multiple':
        const selectedValues = values[fieldName].split(',');
        Array.from(el.options).forEach(options => {
          option.selected = selectedValues.includes(option.value);
        });
      default:
        el.value = values[fieldName];
    }
  }
  const events = ['input', 'change'];
  events.forEach(eventName => {
    const event = new Event(eventName, { bubbles: true });
    el.dispatchEvent(event);
  });
}
