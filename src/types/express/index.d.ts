import express from 'express';

declare global {
  namespace Express {
    export interface Request {
      userId?: number; // Или другой тип, если `userId` не является строкой
      userRole?: number;
    }
  }
}
