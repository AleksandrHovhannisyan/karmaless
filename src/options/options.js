import readSetting from 'utils/readSetting';
import writeSetting from 'utils/writeSetting';

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

  // WTF, Chrome? Why are inputs toggled with space by default?
  checkbox.addEventListener('keyup', (keyEvent) => {
    if (keyEvent.key === 'Enter') {
      keyEvent.target.checked = !keyEvent.target.checked;
      onSettingToggled(keyEvent);
    }
  });

  const settingName = getSettingName(checkbox);
  readSetting(settingName, (result) => {
    if (result[settingName]) {
      checkbox.setAttribute('checked', true);
    }
  });
});
