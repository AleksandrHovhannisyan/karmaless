import readSetting from './readSetting';
import writeSetting from './writeSetting';

/**
 *
 * @param {string} settingName - the name of the setting that should be toggled
 */
export default function toggleSettingEnabled(settingName) {
  readSetting(settingName).then((setting) => {
    const { enabled, ...otherSettingProps } = setting;
    writeSetting(settingName, { enabled: !enabled, ...otherSettingProps });
  });

  return new Promise((resolve) => resolve());
}
