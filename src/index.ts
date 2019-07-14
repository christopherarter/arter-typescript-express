import express from 'express';
import serverless from 'serverless-http';

const app: any = express();
app.get('/', (req: any, res: any) => {
    res.send("Hello World!");
});
const handler = serverless(app);
export { handler }