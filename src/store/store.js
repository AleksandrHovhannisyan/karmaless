import { defaultSettings } from '@constants';

/**
 * @typedef Store https://developer.chrome.com/docs/extensions/reference/storage/
 * @property {(key: string) => Promise<void>} get Returns the value corresponding to `key` from storage.
 * @property {() => void} clear Clears all items from the storage.
 * @property {(key: string, value: any) => void} set Sets `{ [key]: value }` in storage.
 */

/**
 * @typedef StorageParams
 * @property {Store} store
 * @property {Record<string, unknown>} defaults
 */

export class Storage {
  /**
   * @param {StorageParams} params
   */
  constructor(params) {
    /** @type Store */
    this.store = params.store ?? chrome.storage.sync;
    this.defaults = params.defaults;

    if (!Storage.store) {
      Storage.store = this;
    }
    return Storage.store;
  }

  /** Clears the storage */
  clear = () => {
    this.store.clear();
  };

  /** Reads the value associated with `settingName` from storage. https://developer.chrome.com/docs/extensions/reference/storage/#method-StorageArea-get
   * @param {string|Record<string, unknown>} keys - the name of the setting whose value should be read from storage
   */
  get = async (keys) => {
    // If we're requesting a one-time read of a single key-value pair from storage
    if (typeof keys === 'string') {
      // When passing in an object for get, the API uses the values in that object as defaults and the keys for lookups. If there are no values in storage, it returns the defaults. That way, we don't have to do any fallback logic ourselves.
      const settings = await this.store.get(this.defaults[keys]);
      return settings[keys];
    }
    // Reading multiple settings in one go using an object
    return this.store.get(keys);
  };

  /**
   * Associates the given `value` with `settingName` in storage
   * @param {string} settingName - the name of the setting whose value should be saved in storage as an object key.
   * @param {unknown} value - the value to associate with settingName in storage, like this: `{ [settingName]: value }`.
   */
  set = async (settingName, value) => {
    this.store.set({ [settingName]: value });
  };
}

const store = new Storage({ defaults: defaultSettings });
Object.freeze(store);

export default store;
