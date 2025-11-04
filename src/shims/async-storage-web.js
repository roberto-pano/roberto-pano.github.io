// Simple AsyncStorage shim for web using localStorage
// Provides a minimal subset of the async-storage API used by the app.

const AsyncStorage = {
  async getItem(key) {
    try {
      const value = localStorage.getItem(key);
      return value;
    } catch (e) {
      return null;
    }
  },
  async setItem(key, value) {
    try {
      localStorage.setItem(key, value);
      return null;
    } catch (e) {
      throw e;
    }
  },
  async removeItem(key) {
    try {
      localStorage.removeItem(key);
      return null;
    } catch (e) {
      throw e;
    }
  },
  async clear() {
    try {
      localStorage.clear();
      return null;
    } catch (e) {
      throw e;
    }
  },
  async getAllKeys() {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      return keys;
    } catch (e) {
      return [];
    }
  },
};

export default AsyncStorage;
export const getItem = AsyncStorage.getItem;
export const setItem = AsyncStorage.setItem;
export const removeItem = AsyncStorage.removeItem;
export const clear = AsyncStorage.clear;
export const getAllKeys = AsyncStorage.getAllKeys;
