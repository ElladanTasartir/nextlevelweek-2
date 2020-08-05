import express from 'express';
import 'dotenv/config';
import route from './routes';


const app = express();

app.use(route);

const port = process.env.PORT || 3333;


app.listen(port);