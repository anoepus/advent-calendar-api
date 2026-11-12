import express from 'express'; //import express from node_modules
const app = express(); //
const port = process.env.PORT ?? 8080

import indexRouter from './routers/indexRouter.js'
app.use(indexRouter);
import calendarRouter from './routers/calendarRouter.js';
app.use(calendarRouter);

app.listen(port, (error) => {
    if (error) {
        console.log("Failed to start server: ", error.message);
    }
    console.log("Server is running in port: ", port);
});