import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface ExtendedRequest extends Request {
  user: string | jwt.JwtPayload;
}

const SECRET_KEY = process.env.SECRET_KEY;

module.exports = function (
  req: ExtendedRequest, 
  res: Response, 
  next: NextFunction) {
    if (req.method === "OPTIONS") {
      next()
    }
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader ? authHeader.split(' ')[1] : undefined;

      if (!token) {
        return res.status(401).json({message: "User is not authorized"})
      }
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded
      next()
    } catch (e) {
      res.status(401).json({message: "User is not authorized"})
    }
};