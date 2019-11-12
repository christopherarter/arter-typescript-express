import express, { Express } from 'express';
import serverless from 'serverless-http';
const app: Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});
const handler = serverless(app);
export { handler }