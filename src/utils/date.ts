export const getDate30daysAgo = () => {
  return new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
};

export const getToday = () => {
  return new Date().toISOString().slice(0, 10);
};
