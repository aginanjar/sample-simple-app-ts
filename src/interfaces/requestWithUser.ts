import Request from 'express';

export interface RequestWithUser extends Request {
  user: any; // Add 'user' property to Request interface
}