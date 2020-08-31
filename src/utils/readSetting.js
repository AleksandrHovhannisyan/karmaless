import { settings } from 'constants/settings';
import { defaultSettings } from 'constants/defaultSettings';

export default function readSetting(settingName, callback) {
  return settings.get(
    { [settingName]: defaultSettings[settingName] },
    callback
  );
}
