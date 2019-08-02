import express from 'express';

import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const version = 'v1';

app.use(`/api/${version}/auth/`, authRoutes);

// Status 404 (Error) middleware
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'Resource Does Not Exist',
    message: 'Cannot Find Route',
  });
});
export default app;
