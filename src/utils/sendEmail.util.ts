import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

import { nodemailerConfig } from "@/config";

import { logger } from "./Logger";

const senderEmail = `"Ansopedia" <${nodemailerConfig.auth?.user}>`;

interface EmailOptions extends Mail.Options {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    const transporter = nodemailer.createTransport(nodemailerConfig);

    await transporter.sendMail({
      from: senderEmail,
      ...options,
    });
  } catch (error) {
    logger.error("Error sending email:", error);
    throw error;
  }
};
