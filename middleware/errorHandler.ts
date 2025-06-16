// middlewares/errorHandler.ts

import { Request, Response, NextFunction } from 'express';

// Define a custom error interface to include 'statusCode'
interface CustomError extends Error {
  statusCode?: number;
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
