import { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../../utils';
import { EmailService } from './email.service';
import { STATUS_CODES } from '../../../constants';

export class EmailController {
  static async sendEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { message } = await EmailService.sendEmail(req.body);

      sendResponse({
        response: res,
        message,
        statusCode: STATUS_CODES.OK,
      });
    } catch (error) {
      next(error);
    }
  }
}
