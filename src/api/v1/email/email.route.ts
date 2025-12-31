import { Router } from "express";

import { EmailController } from "./email.controller.js";

export const emailRoutes = Router();

emailRoutes.post("/emails", EmailController.sendEmail);
