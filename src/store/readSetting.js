import { store } from 'store/store';
import { defaultSettings } from 'store/defaultSettings';

/**
 * @returns {any} the stored value of the given setting, or a default value if the setting was never written
 * @param {string} settingName - the name of the setting to read from the extension store
 * @param {function} callback - a callback to execute once the setting has been read from the store
 */
export default function readSetting(settingName, callback) {
  return store.get({ [settingName]: defaultSettings[settingName] }, callback);
}
