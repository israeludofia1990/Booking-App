import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Basic route with TypeScript types for Request and Response
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Booking App API!' });
});
export default app;
