import { calendarDays } from '../calendarDays.js';

export function getCalendarDay() {
    const localDate = new Date();
    const day = localDate.getDate();
    
    if (!isDayUnlocked(day)) {
        return 1;
    }
    return day;
};

export function isDayUnlocked(day) {
    const localDate = new Date();
    const fakeMonth = 11
    console.log("FAKE MONTH IS BEING USED! SWITCH TO LOCALDATE IN PROD!", fakeMonth);
    const calendarMonth = 11; 

    return fakeMonth === calendarMonth && localDate.getDate() >= day;
};

export function getCalendarDayInfo(day) {
    const calendarDaysList = calendarDays;
    const foundCalendarDay = calendarDaysList.find((d) => d.id === day);

    return foundCalendarDay;
};
