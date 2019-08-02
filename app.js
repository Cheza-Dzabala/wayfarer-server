import express from 'express';

import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const version = 'v1';

app.use(`/api/${version}/auth/`, authRoutes);
export default app;
