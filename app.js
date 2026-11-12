import express from 'express'; //import express from node_modules
const app = express(); //
const port = process.env.PORT ?? 8080

import pagesRouter from './routers/calendarRouter.js';
app.use(pagesRouter);

app.listen(port, (error) => {
    if (error) {
        console.log("Failed to start server: ", error.message);
    }
    console.log("Server is running in port: ", port);
});