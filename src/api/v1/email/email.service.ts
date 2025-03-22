import { EmailNotification, renderEmail, sendEmail, validateEmailNotification } from '@/utils';

export class EmailService {
  static async sendEmail(emailNotification: EmailNotification): Promise<{ message: string }> {
    const validateEmail = validateEmailNotification(emailNotification);

    const emailHtml = renderEmail(validateEmail);

    // ? not using await because it takes more time to deliver email
    sendEmail({
      to: validateEmail.to,
      subject: validateEmail.subject,
      html: emailHtml,
    });

    return { message: 'Email sent successfully' };
  }
}
