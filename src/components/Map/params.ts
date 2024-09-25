import {BANK_CATEGORY_CODE, LATITUDE, LONGTITUDE} from "constants/map";

export const params = {
  ll: `${LATITUDE},${LONGTITUDE}`,
  categories: BANK_CATEGORY_CODE,
  fields: "fsq_id,name,geocodes",
  open_now: true,
  limit: 50,
};
