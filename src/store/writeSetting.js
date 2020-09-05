import { store } from 'store/store';

/**
 *
 * @param {string} settingName - the name of the setting whose value should be saved in the store
 * @param {any} value - the value to associate with settingName in the store
 */
export default function writeSetting(settingName, value) {
  store.set({ [settingName]: value });
  return new Promise((resolve) => resolve());
}
