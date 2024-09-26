import {THIRTY_DAYS} from "../src/constants/date";
import {
  getDate30daysAgo,
  getTime,
  getTimeToday,
  getToday,
  validateDateRange,
} from "../src/utils/date";

describe("Date utilities", () => {
  beforeAll(() => {
    jest.useFakeTimers({now: new Date("2024-09-25Ts00:00:00Z"), doNotFake: ["Date"]});
    jest.setSystemTime(new Date("2024-09-25T00:00:00Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("getTimeToday returns the current timestamp", () => {
    const currentTime = getTimeToday();
    const currentDate = new Date().getTime();

    expect(currentTime).toBe(currentDate);
  });

  test("getDate30daysAgo returns the correct date 30 days ago", () => {
    const date30DaysAgo = getDate30daysAgo();
    const expectedDate = new Date(new Date().getTime() - THIRTY_DAYS).toISOString().slice(0, 10);

    expect(date30DaysAgo).toBe(expectedDate);
  });

  test("getToday returns today's date in YYYY-MM-DD format", () => {
    const today = getToday();

    expect(today).toBe(new Date().toISOString().slice(0, 10));
  });

  test("getTime returns the timestamp for a given date", () => {
    const date = "2024-09-25";
    const timestamp = getTime(date);

    expect(timestamp).toBe(new Date(date).getTime());
  });

  test("validateDateRange returns true for valid date ranges", () => {
    const dateStart = "2024-09-01";
    const dateEnd = "2024-09-25";

    expect(validateDateRange(dateStart, dateEnd)).toBe(true);
  });

  test("validateDateRange returns false if the end date is before the start date", () => {
    const dateStart = "2024-09-25";
    const dateEnd = "2024-09-01";

    expect(validateDateRange(dateStart, dateEnd)).toBe(false);
  });

  test("validateDateRange returns false if the date range is less than 10 days", () => {
    const dateStart = "2024-09-20";
    const dateEnd = "2024-09-25";

    expect(validateDateRange(dateStart, dateEnd)).toBe(false);
  });
});
