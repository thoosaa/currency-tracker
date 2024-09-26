import {TEN_DAYS, THIRTY_DAYS} from "constants/date";

export const getTimeToday = (): number => {
  return new Date().getTime();
};

export const getDate30daysAgo = (): string => {
  const today = getTimeToday();
  const thirtyDaysAgo = today - THIRTY_DAYS;

  return new Date(thirtyDaysAgo).toISOString().slice(0, 10);
};

export const getToday = () => {
  return new Date().toISOString().slice(0, 10);
};

export const getTime = (date: string) => {
  return new Date(date).getTime();
};

export const validateDateRange = (dateStart: string, dateEnd: string) => {
  const dateStartTime = getTime(dateStart);
  const dateEndTime = getTime(dateEnd);

  return dateStartTime <= dateEndTime && (dateEndTime - dateStartTime) / TEN_DAYS >= 10;
};
