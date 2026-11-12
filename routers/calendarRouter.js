import { Router } from "express";
const router = Router(); // router function from the express libary.

//health
router.get("/health", (req, res) => {
    res.send({ status: "ok", uptime: process.uptime() });
});

//index
router.get("/", (req, res) => {
    res.send({ data: "Index" });
});

import { getCalendarDay, isDayUnlocked } from "../service/calendarService.js";

router.get("/api/calendarDays", (req , res) => {
    const calendarDay = getCalendarDay();
    res.status(200).send({ calendarDay: calendarDay });
});

router.get("/api/calendarDays:day", (req, res) => {
    const day = Number(req.params.day);

    if (day < 1 || day > 24) {
        return res.status(400).send({ error: "Day must be between 1 and 24."});
    };
    if (!isDayUnlocked(day)) {
        return res.status(403).send({ error: "Day is forbidden."});
    };
    return res.status(200).send({ })
    
});

export default router;