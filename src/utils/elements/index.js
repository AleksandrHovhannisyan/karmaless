/** Returns the given element's name attribute, if it has one. */
export const getNameAttribute = (el) => el.getAttribute('name');

/** Removes the given element from the DOM. */
export const remove = (el) => el.remove();

/** Clicks the given element. */
export const click = (el) => el.click();

/**
 *
 * @param {string} settingName - the name of the setting whose corresponding checkbox should be queried
 * @param {boolean} checked - a flag denoting whether the checkbox should be checked
 */
export const updateCheckbox = (settingName, checked) => {
  const checkbox = document.querySelector(`input[name="${settingName}"]`);
  if (!checkbox) return;

  if (checked) {
    checkbox.setAttribute('checked', true);
    checkbox.setAttribute('value', true);
  } else {
    checkbox.removeAttribute('checked');
    checkbox.setAttribute('value', false);
  }
};

/** Returns all checkboxes from the DOM. */
export const getAllCheckboxes = () =>
  document.querySelectorAll('.karmaless-setting input[type="checkbox"]');
