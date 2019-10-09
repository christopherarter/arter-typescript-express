import express, { Request, Response, Express } from 'express';
import serverless from 'serverless-http';
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World!");
});
const handler = serverless(app);
export { handler, app }