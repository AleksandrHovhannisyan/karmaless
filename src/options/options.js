import readSetting from 'store/readSetting';
import updateCheckbox from 'utils/updateCheckbox';
import checkboxes from 'constants/checkboxes';
import resetToDefaults from 'store/resetToDefaults';
import getName from 'utils/getName';
import toggleSettingEnabled from 'store/toggleSettingEnabled';

function onSettingToggled(changeEvent) {
  const checked = changeEvent.target.checked;
  const settingName = getName(changeEvent.target);

  toggleSettingEnabled(settingName).then(() => {
    updateCheckbox(settingName, checked);
  });
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

  const settingName = getName(checkbox);
  readSetting(settingName).then((setting) => {
    updateCheckbox(settingName, setting.enabled);
  });
});

document
  .getElementById('karmaless-reset-settings')
  .addEventListener('click', resetToDefaults);
