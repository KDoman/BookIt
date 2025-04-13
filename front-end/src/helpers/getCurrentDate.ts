import { today, getLocalTimeZone } from "@internationalized/date";

export const getCurrentDate = () => {
  return today(getLocalTimeZone());
};
