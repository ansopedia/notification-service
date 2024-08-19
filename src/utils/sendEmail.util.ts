import nodemailer from 'nodemailer';
import { nodemailerConfig } from '@/config';
import Mail from 'nodemailer/lib/mailer';
import { logger } from './Logger';

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
      from: nodemailerConfig.auth?.user,
      ...options,
    });
  } catch (error) {
    logger.error('Error sending email:', error);
    throw error;
  }
};
