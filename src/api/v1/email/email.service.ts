import { EmailNotification, renderEmail, sendEmail, validateEmailNotification } from '@/utils';

export class EmailService {
  static async sendEmail(emailNotification: EmailNotification): Promise<{ message: string }> {
    const validateEmail = validateEmailNotification(emailNotification);

    const emailHtml = renderEmail(validateEmail);

    sendEmail({
      to: validateEmail.to,
      subject: validateEmail.subject,
      html: emailHtml,
    });

    return { message: 'Email sent successfully' };
  }
}
