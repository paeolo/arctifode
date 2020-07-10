import { setLocale } from 'yup';
import { TimeAgoDict } from "./types";

export const getTimeAgoLocale = (agoDict: TimeAgoDict, inDict: TimeAgoDict) => {
  return function (number: number, index: number): [string, string] {
    return [
      [agoDict.moment, inDict.moment],
      [agoDict.seconds, inDict.seconds],
      [agoDict.minute, inDict.minute],
      [agoDict.minutes, inDict.minutes],
      [agoDict.hour, inDict.hour],
      [agoDict.hours, inDict.hours],
      [agoDict.day, inDict.day],
      [agoDict.days, inDict.days],
      [agoDict.week, inDict.week],
      [agoDict.weeks, inDict.weeks],
      [agoDict.month, inDict.month],
      [agoDict.months, inDict.months],
      [agoDict.year, inDict.year],
      [agoDict.years, inDict.years],
    ][index] as [string, string];
  }
}

export function initYup() {
  setLocale({
    mixed: {
      default: ({ path }) => ({ key: 'validation.default', values: { path } }),
      required: ({ path }) => ({ key: 'validation.required', values: { path } })
    },
    string: {
      min: ({ min }) => ({ key: 'validation.min', values: { min } }),
      max: ({ max }) => ({ key: 'validation.max', values: { max } }),
    },
  });
}
