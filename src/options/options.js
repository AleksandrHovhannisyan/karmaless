import { defaultSettings } from '@constants';
import store from '@store';

const checkboxes = Array.from(
  document.querySelectorAll('input[type="checkbox"]')
);

/**
 * @param {HTMLInputElement} el
 */
const getSettingName = (el) => el.getAttribute('name');

const syncAllCheckboxes = async () => {
  // Read all settings in one go for performance
  const settings = await store.get(defaultSettings);
  // Then just loop over the checkboxes and update each one to be its corresponding value read from storage
  checkboxes.forEach((checkbox) => {
    const key = getSettingName(checkbox);
    const setting = settings[key];
    checkbox.toggleAttribute('checked', setting.isEnabled);
  });
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
