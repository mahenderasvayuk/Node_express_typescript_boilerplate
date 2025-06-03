import moment from "moment-timezone";
moment.tz.setDefault(process?.env?.APP_TIMEZONE_RESION ?? "Asia/Kolkata");

// Basic formatting
export const formatDate = (date: Date | string) => {
    return moment(date).format('lll');  // Sep 4, 2023 4:06 PM
};

export const formatTime12Hours = (time: Date | string) => {
    return moment(time).format('hh:mm a');  // 04:06 pm
};

export const formatTime24Hours = (time: Date | string) => {
    return moment(time).format('HH:mm');  // 16:06 (no need for 'a' in 24h format)
};

// Date formats
export const formatDateShort = (date: Date | string) => {
    return moment(date).format('L');  // 09/04/2023 (locale specific)
};

export const formatDateMedium = (date: Date | string) => {
    return moment(date).format('ll');  // Sep 4, 2023
};

export const formatDateLong = (date: Date | string) => {
    return moment(date).format('LL');  // September 4, 2023
};

export const formatDateFull = (date: Date | string) => {
    return moment(date).format('LLLL');  // Monday, September 4, 2023 4:06 PM
};

export const formatDateISO = (date: Date | string) => {
    return moment(date).format('YYYY-MM-DDTHH:mm:ssZ');  // 2023-09-04T16:06:00+05:30
};

// Time formats
export const formatTimeWithSeconds = (time: Date | string) => {
    return moment(time).format('hh:mm:ss a');  // 04:06:00 pm
};

export const formatTime24WithSeconds = (time: Date | string) => {
    return moment(time).format('HH:mm:ss');  // 16:06:00
};

// Relative time
export const formatRelativeTime = (date: Date | string) => {
    return moment(date).fromNow();  // 5 minutes ago
};

// Calendar time
export const formatCalendarTime = (date: Date | string) => {
    return moment(date).calendar();  // Today at 4:06 PM
};

// Custom formats
export const formatCustom = (date: Date | string, formatString: string) => {
    return moment(date).format(formatString);
};

// Date manipulation
export const addDays = (date: Date | string, days: number) => {
    return moment(date).add(days, 'days').toDate();
};

export const subtractDays = (date: Date | string, days: number) => {
    return moment(date).subtract(days, 'days').toDate();
};

export const addMonths = (date: Date | string, months: number) => {
    return moment(date).add(months, 'months').toDate();
};

export const subtractMonths = (date: Date | string, months: number) => {
    return moment(date).subtract(months, 'months').toDate();
};

// Date comparison
export const isSameDay = (date1: Date | string, date2: Date | string) => {
    return moment(date1).isSame(date2, 'day');
};

export const isBefore = (date1: Date | string, date2: Date | string) => {
    return moment(date1).isBefore(date2);
};

export const isAfter = (date1: Date | string, date2: Date | string) => {
    return moment(date1).isAfter(date2);
};

// Date parsing
export const parseDateString = (dateString: string, format: string) => {
    return moment(dateString, format).toDate();
};

// Timezone conversion
export const convertToTimezone = (date: Date | string, timezone: string) => {
    return moment(date).tz(timezone).toDate();
};

// Duration formatting
export const formatDuration = (milliseconds: number) => {
    return moment.duration(milliseconds).humanize();  // 5 minutes
};

// Week and month information
export const getWeekOfYear = (date: Date | string) => {
    return moment(date).week();
};

export const getDaysInMonth = (date: Date | string) => {
    return moment(date).daysInMonth();
};

// Start and end of time periods
export const startOfDay = (date: Date | string) => {
    return moment(date).startOf('day').toDate();
};

export const endOfDay = (date: Date | string) => {
    return moment(date).endOf('day').toDate();
};

export const startOfWeek = (date: Date | string) => {
    return moment(date).startOf('week').toDate();
};

export const endOfWeek = (date: Date | string) => {
    return moment(date).endOf('week').toDate();
};

export const startOfMonth = (date: Date | string) => {
    return moment(date).startOf('month').toDate();
};

export const endOfMonth = (date: Date | string) => {
    return moment(date).endOf('month').toDate();
};

// Difference between dates
export const diffInDays = (date1: Date | string, date2: Date | string) => {
    return moment(date1).diff(moment(date2), 'days');
};

export const diffInHours = (date1: Date | string, date2: Date | string) => {
    return moment(date1).diff(moment(date2), 'hours');
};

export const diffInMinutes = (date1: Date | string, date2: Date | string) => {
    return moment(date1).diff(moment(date2), 'minutes');
};

// Validation
export const isValidDate = (date: any) => {
    return moment(date).isValid();
};
// EXPIRE TIMESTAMPS
export const generateCurrentTimeStamps = (): number => {
    return moment().valueOf()
};
export const generateExprireTimestampsHours = (numberOfHours: number): number => {
    return moment().add(numberOfHours, 'hour').valueOf()
};
export const generateExprireTimestampsDays = (numberOddays: number): number => {
    return moment().add(numberOddays, 'day').valueOf()
};
export const generateExprireTimestampsMonths = (numberOfMonth: number): number => {
    return moment().add(numberOfMonth, 'months').valueOf()
}
export default moment;