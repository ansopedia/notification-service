import type SMTPTransport from "nodemailer/lib/smtp-transport/index.js";

import { envConstants } from "@/constants";

const { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER } = envConstants;

export const nodemailerConfig: SMTPTransport.Options = {
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
};
