import { store } from 'store/store';
import { defaultSettings } from 'store/defaultSettings';

export default function readSetting(settingName, callback) {
  return store.get({ [settingName]: defaultSettings[settingName] }, callback);
}
