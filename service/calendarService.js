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
    const calendarMonth = 11;   
    return localDate.getMonth() === calendarMonth && localDate.getDate() >= day;
}

