import { defaultSettings } from '@constants';
import { getNameAttribute, updateCheckbox, getAllCheckboxes } from '@utils';

class Storage {
  constructor(store = chrome.storage.sync) {
    this.store = store;
    if (!Storage.store) {
      Storage.store = this;
    }
    return Storage.store;
  }

  /** Resets the storage to defaults */
  reset = () => {
    this.store.clear();
    getAllCheckboxes().forEach((checkbox) => {
      const settingName = getNameAttribute(checkbox);
      const defaultValue = defaultSettings[settingName];
      updateCheckbox(settingName, defaultValue.enabled);
    });
  };

  /** Reads the value associated with `settingName` from storage
   * @param {string} settingName - the name of the setting whose value should be read from storage
   */
  readSetting = (settingName) => {
    return new Promise((resolve, reject = console.log) => {
      this.store.get(
        { [settingName]: defaultSettings[settingName] },
        (settings) => {
          if (chrome.runtime.lastError) {
            reject(
              `Failed to read "${settingName}" from the karmaless settings.`
            );
          } else {
            resolve(settings[settingName]);
          }
        }
      );
    });
  };

  /**
   * Associates the given `value` with `settingName` in storage
   * @param {string} settingName - the name of the setting whose value should be saved in storage
   * @param {any} value - the value to associate with settingName in storage
   */
  writeSetting = (settingName, value) => {
    this.store.set({ [settingName]: value });
    return new Promise((resolve) => resolve());
  };

  /**
   *
   * @param {string} settingName - the name of the setting that should be toggled
   */
  toggleSetting = (settingName) => {
    this.readSetting(settingName).then((setting) => {
      const { enabled, ...otherSettingProps } = setting;
      this.writeSetting(settingName, {
        enabled: !enabled,
        ...otherSettingProps,
      });
    });

    return new Promise((resolve) => resolve());
  };
}

const store = new Storage();
Object.freeze(store);

export default store;
