export const updateLS = () => {
  const currentTime = new Date().getTime();
  const lastUpdated = localStorage.getItem("lastUpdated");

  if (!lastUpdated || currentTime - new Date(lastUpdated).getTime() > 24 * 60 * 60 * 1000) {
    localStorage.clear();
    localStorage.setItem("lastUpdated", new Date(currentTime).toISOString());
  }
};

export const getLastUpdate = () => {
  return localStorage.getItem("lastUpdated")?.slice(11, 16);
};
