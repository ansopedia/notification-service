import { Router } from "express";

import { emailRoutes } from "./email/email.route.js";

export const routes = Router();

routes.use(emailRoutes);
