import { Router } from "express";
const router = Router();

//health check
router.get("/health", (req, res) => {
    res.send({ status: "ok", uptime: process.uptime() });
});

//index
router.get("/", (req, res) => {
    res.send({ data: "Index" });
});

export default router;