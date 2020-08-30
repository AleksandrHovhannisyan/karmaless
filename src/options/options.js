import { settings } from 'constants/settings';
import { defaultSettings } from 'constants/defaultSettings';

const checkboxes = document.querySelectorAll(
  '.karmaless-setting input[type="checkbox"]'
);

function getSettingName(checkbox) {
  return checkbox.getAttribute('name');
}

function onSettingToggled(changeEvent) {
  const settingName = getSettingName(changeEvent.target);
  settings.set({ [settingName]: changeEvent.target.checked });
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', onSettingToggled);

  const settingName = getSettingName(checkbox);
  settings.get({ [settingName]: defaultSettings[settingName] }, (result) => {
    if (result[settingName]) {
      checkbox.setAttribute('checked', true);
    }
  });
});
