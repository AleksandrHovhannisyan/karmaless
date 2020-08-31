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

  const settingName = getSettingName(checkbox);
  readSetting(settingName, (result) => {
    if (result[settingName]) {
      checkbox.setAttribute('checked', true);
    }
  });
});
