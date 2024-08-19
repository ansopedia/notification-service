import { Router } from 'express';
import { EmailController } from './email.controller';

export const emailRoutes = Router();

emailRoutes.post('/emails', EmailController.sendEmail);
