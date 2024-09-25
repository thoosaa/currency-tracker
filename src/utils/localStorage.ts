import {FIVE_MINUTES} from "constants/date";

export const updateLocalStorage = () => {
  const currentTime = new Date().getTime();
  const lastUpdated = localStorage.getItem("lastUpdated") ?? "";

  const lastUpdatedTime = new Date(lastUpdated).getTime();
  const timeDiff = currentTime - lastUpdatedTime;

  if (!lastUpdated || timeDiff > FIVE_MINUTES) {
    localStorage.clear();
    localStorage.setItem("lastUpdated", new Date(currentTime).toISOString());
  }
};

export const getLastUpdate = () => {
  return localStorage.getItem("lastUpdated")?.slice(11, 16);
};
