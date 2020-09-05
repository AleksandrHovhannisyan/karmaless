import { store } from 'store/store';
import { defaultSettings } from 'store/defaultSettings';

/**
 * @returns {Promise} - a promise that either resolves with the value of the setting or rejects if an error occurred
 * @param {string} settingName - the name of the setting to read from the extension store
 */
export default function readSetting(settingName) {
  return new Promise((resolve, reject = console.log) => {
    store.get({ [settingName]: defaultSettings[settingName] }, (settings) => {
      if (chrome.runtime.lastError) {
        reject(`Failed to read "${settingName}" from the karmaless settings.`);
      } else {
        resolve(settings[settingName]);
      }
    });
  });
}
