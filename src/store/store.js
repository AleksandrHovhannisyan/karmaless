import { defaultSettings } from '@constants';

/**
 * @typedef Store https://developer.chrome.com/docs/extensions/reference/storage/
 * @property {(key: string) => Promise<unknown>} get Returns the value corresponding to `key` from storage.
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

    // Prefer singleton pattern to object literal for ease of testing
    if (!Storage.store) {
      Storage.store = this;
    }
    return Storage.store;
  }

  /** Clears the storage */
  clear = () => {
    this.store.clear();
  };

  /** Reads the value associated with `keys` from storage. https://developer.chrome.com/docs/extensions/reference/storage/#method-StorageArea-get
   * @param {string|Record<string, unknown>} keys - the name of the setting whose value should be read from storage
   */
  get = async (keys) => {
    // If we're requesting a one-time read of a single key-value pair from storage
    if (typeof keys === 'string') {
      const settings = await this.getAll();
      return settings[keys];
    }
    // Reading multiple settings in one go using an object
    return this.store.get(keys);
  };

  /**
   * @returns {Promise<Record<string, unknown>>} an object of the form { [key]: value } for every key-value pair in the store
   */
  getAll = async () => {
    // When passing in an object for get, the API uses the keys in that object for lookups and the values as defaults/fallbacks in case those keys are not registered in the store. For example, if the store looks like { a: 1, b: 2 } and we request { a: 'a-default', c: 'c-default' }, we'll get back an object that looks like: { a: 1, c: 'c-default' } because a exists in storage while c does not.
    return this.store.get(this.defaults);
  };

  /**
   * Associates `value` with `key` in storage
   * @param {string} key - the name of the setting to use as the key in storage.
   * @param {unknown} value - the value to associate with key in storage, like this: `{ [key]: value }`.
   */
  set = async (key, value) => {
    this.store.set({ [key]: value });
  };
}

const store = new Storage({ defaults: defaultSettings });
Object.freeze(store);

export default store;
