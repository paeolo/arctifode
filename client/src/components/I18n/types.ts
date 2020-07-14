export type TimeAgoFn = (date: Date) => string;

export type TimeAgoDict = {
  moment: string;
  seconds: string;
  minute: string,
  minutes: string,
  hour: string,
  hours: string,
  day: string,
  days: string,
  week: string,
  weeks: string,
  month: string,
  months: string,
  year: string,
  years: string,
};
