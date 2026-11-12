import { calendarDays } from '../calendarDays.js';
// finds the day localDate on backend determine it is today and returns it to client
// returns 1 if day isn't unlocked (its not a day in the christmas period). 
export function getCalendarDay() {
    const localDate = new Date();
    const day = localDate.getDate();
    
    if (!isDayUnlocked(day)) {
        return 1;
    }
    return day;
};
// boolean that decides if the day provided and the current month of the backend has been unlocked.
export function isDayUnlocked(day) {
    const localDate = new Date();
    const fakeMonth = 11
    console.log("FAKE MONTH IS BEING USED! SWITCH TO LOCALDATE IN PROD!", fakeMonth);
    const calendarMonth = 11; // 11 = december, array starts at 0

    return fakeMonth === calendarMonth && localDate.getDate() >= day;
};
// finds a object from the calendarDaysList on provided day (day = id) 
export function getCalendarDayInfo(day) {
    const calendarDaysList = calendarDays;
    const foundCalendarDay = calendarDaysList.find((d) => d.id === day);

    return foundCalendarDay;
};
