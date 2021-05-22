import store from '@store';
import { getNameAttribute, updateCheckbox, getAllCheckboxes } from '@utils';

function onSettingToggled(changeEvent) {
  const checked = changeEvent.target.checked;
  const settingName = getNameAttribute(changeEvent.target);

  store.toggleSetting(settingName).then(() => {
    updateCheckbox(settingName, checked);
  });
}

getAllCheckboxes().forEach((checkbox) => {
  checkbox.addEventListener('change', onSettingToggled);

  // Checkboxes are toggled with space by default to prevent form submit, so this is a workaround
  checkbox.addEventListener('keyup', (keyEvent) => {
    if (keyEvent.key === 'Enter') {
      keyEvent.target.checked = !keyEvent.target.checked;
      onSettingToggled(keyEvent);
    }
  });

  const settingName = getNameAttribute(checkbox);
  store.readSetting(settingName).then((setting) => {
    updateCheckbox(settingName, setting.enabled);
  });
});

document
  .getElementById('karmaless-reset-settings')
  .addEventListener('click', store.reset);
