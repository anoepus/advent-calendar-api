import { Router } from "express";
const router = Router(); // router function from the express libary.

import { getCalendarDay, isDayUnlocked, getCalendarDayInfo } from "../service/calendarService.js";
// GET current calendar day
router.get("/api/calendarDays", (req , res) => {
    const calendarDay = getCalendarDay();
    res.status(200).send({ calendarDay: calendarDay });
});
// GET calendar day info
router.get("/api/calendarDays/:day", (req, res) => {
    const day = Number(req.params.day);

    if (day < 1 || day > 24) {
        return res.status(400).send({ error: "Day must be between 1 and 24."});
    };
    if (!isDayUnlocked(day)) {
        return res.status(403).send({ error: "Day is forbidden."});
    };
    return res.status(200).send(getCalendarDayInfo(day));
});

export default router;