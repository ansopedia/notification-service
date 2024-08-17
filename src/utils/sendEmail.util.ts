import nodemailer from 'nodemailer';
import { nodemailerConfig } from '@/config';
import Mail from 'nodemailer/lib/mailer';
import { logger } from './Logger';

export const sendEmail = async (options: Mail.Options) => {
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
