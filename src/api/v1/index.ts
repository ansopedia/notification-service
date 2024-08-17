import { Router } from 'express';
import { emailRoutes } from './email/email.route';

export const routes = Router();

routes.use(emailRoutes);
