export default function updateCheckbox(settingName, value) {
  const checkbox = document.querySelector(`input[name="${settingName}"]`);

  if (value) {
    checkbox.setAttribute('checked', true);
    checkbox.setAttribute('value', true);
  } else {
    checkbox.removeAttribute('checked');
    checkbox.setAttribute('value', false);
  }
}
