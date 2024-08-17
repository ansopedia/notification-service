import { sendEmail } from '@/utils';
import { EmailNotificationSchema, validateEmailNotificationSchema } from './email.validation';

export class EmailService {
  static async sendEmail(notification: EmailNotificationSchema): Promise<{ message: string }> {
    validateEmailNotificationSchema(notification);

    sendEmail({
      to: notification.to,
      subject: 'Verify your email',
      text: 'This is a test email',
    });

    return { message: 'Email sent successfully' };
  }
}
