import { Request, Response, NextFunction } from 'express';

export const authorizeAdmin = (req: any, res: Response, next: NextFunction) => {
  if (req.userRole !== 2) { // 2 = администратор
    console.log("Not an admin")
    return res.sendStatus(403);
  }
  next();
};
