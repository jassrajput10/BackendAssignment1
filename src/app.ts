// import the express application and type definition
import express, { Express, Request, Response } from "express";

// initialize Express application
const app: Express = express();

// Define basic routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

export default app;