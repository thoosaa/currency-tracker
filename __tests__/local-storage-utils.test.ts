import {updateLocalStorage, getLastUpdate} from "utils/localStorage";

const localStorageMock = (() => {
  let store: {[key: string]: string} = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(global, "localStorage", {value: localStorageMock});

describe("LocalStorage utilities", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test("should update localStorage if no 'lastUpdated' is set", () => {
    const setItemSpy = jest.spyOn(localStorage, "setItem");
    const clearSpy = jest.spyOn(localStorage, "clear");

    updateLocalStorage();

    expect(clearSpy).toHaveBeenCalled();
    expect(setItemSpy).toHaveBeenCalledWith("lastUpdated", expect.any(String));
  });

  test("should update localStorage if the time difference is more than 5 minutes", () => {
    const setItemSpy = jest.spyOn(localStorage, "setItem");
    const clearSpy = jest.spyOn(localStorage, "clear");

    const fiveMinutesAgo = new Date(Date.now() - 6 * 60 * 1000).toISOString();
    localStorage.setItem("lastUpdated", fiveMinutesAgo);

    updateLocalStorage();

    expect(clearSpy).toHaveBeenCalled();
    expect(setItemSpy).toHaveBeenCalledWith("lastUpdated", expect.any(String));
  });

  test("getLastUpdate should return time in HH:MM format", () => {
    const lastUpdated = new Date().toISOString();
    localStorage.setItem("lastUpdated", lastUpdated);

    const lastUpdate = getLastUpdate();

    expect(lastUpdate).toBe(lastUpdated.slice(11, 16));
  });

  test("getLastUpdate should return undefined if 'lastUpdated' is not set", () => {
    const lastUpdate = getLastUpdate();

    expect(lastUpdate).toBeUndefined();
  });
});
