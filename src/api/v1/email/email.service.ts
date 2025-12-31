import { type EmailNotification, validateEmailNotification } from "@ansospace/types";

import { renderEmail, sendEmail } from "@/utils";

export class EmailService {
  static async sendEmail(emailNotification: EmailNotification): Promise<{ message: string }> {
    const validateEmail = validateEmailNotification(emailNotification);

    const emailHtml = await renderEmail(validateEmail);

    // ? not using await because it takes more time to deliver email
    sendEmail({
      to: validateEmail.to,
      subject: validateEmail.subject,
      html: emailHtml,
    });

    return { message: "Email sent successfully" };
  }
}
