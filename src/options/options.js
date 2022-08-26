import store from '@store';

const checkboxes = Array.from(
  document.querySelectorAll('input[type="checkbox"]')
);

/**
 * @param {HTMLInputElement} el
 */
const getSettingName = (el) => el.getAttribute('name');

/**
 * @param {HTMLInputElement} checkbox
 */
const syncCheckboxState = async (checkbox) => {
  const settingName = getSettingName(checkbox);
  try {
    // TODO: just read all settings in advance in one go and then update each checkbox. See here for docs on how to retrieve multiple values from the Chrome storage API: https://developer.chrome.com/docs/extensions/reference/storage/#method-StorageArea-get
    const { isEnabled } = await store.get(settingName);
    checkbox.toggleAttribute('checked', isEnabled);
  } catch (e) {
    console.error(e);
  }
};

const syncAllCheckboxes = async () => {
  await Promise.all(checkboxes.map((checkbox) => syncCheckboxState(checkbox)));
};

// Listen for changes and update the store
checkboxes.forEach(async (checkbox) => {
  const settingName = getSettingName(checkbox);
  checkbox.addEventListener('change', async (e) => {
    const isEnabled = e.target.checked;
    try {
      await store.set(settingName, { isEnabled });
    } catch (e) {
      console.error(e);
    }
  });
});

document.querySelector('form').addEventListener('reset', () => {
  store.clear();
  syncAllCheckboxes();
});

syncAllCheckboxes();
