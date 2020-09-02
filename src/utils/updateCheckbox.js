/**
 *
 * @param {string} settingName - the name of the setting whose corresponding checkbox should be queried
 * @param {boolean} value - a flag denoting whether the checkbox should be checked
 */
export default function updateCheckbox(settingName, value) {
  const checkbox = document.querySelector(`input[name="${settingName}"]`);
  if (!checkbox) return;

  if (value) {
    checkbox.setAttribute('checked', true);
    checkbox.setAttribute('value', true);
  } else {
    checkbox.removeAttribute('checked');
    checkbox.setAttribute('value', false);
  }
}
