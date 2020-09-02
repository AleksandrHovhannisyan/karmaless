import readSetting from 'store/readSetting';
import writeSetting from 'store/writeSetting';
import { defaultSettings } from 'store/defaultSettings';
import updateCheckbox from 'utils/updateCheckbox';

const checkboxes = document.querySelectorAll(
  '.karmaless-setting input[type="checkbox"]'
);

function getSettingName(checkbox) {
  return checkbox.getAttribute('name');
}

function onSettingToggled(changeEvent) {
  const settingName = getSettingName(changeEvent.target);
  writeSetting(settingName, changeEvent.target.checked);
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', onSettingToggled);

  // Checkboxes are toggled with space by default to prevent form submit, so this is a workaround
  checkbox.addEventListener('keyup', (keyEvent) => {
    if (keyEvent.key === 'Enter') {
      keyEvent.target.checked = !keyEvent.target.checked;
      onSettingToggled(keyEvent);
    }
  });

  const settingName = getSettingName(checkbox);

  readSetting(settingName, (result) => {
    updateCheckbox(settingName, result[settingName]);
  });
});

document
  .getElementById('karmaless-reset-settings')
  .addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
      const settingName = getSettingName(checkbox);
      const defaultValue = defaultSettings[settingName];
      writeSetting(settingName, defaultValue);
    });
  });
