import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import rest from './rest';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(morgan('dev'));

rest(app);

export default app;