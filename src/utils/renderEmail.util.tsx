import { type EmailNotification, emailNotificationEvents } from "@ansospace/types";
import { render } from "@react-email/components";

import { EmailVerificationOTP } from "../emails/index.js";
import ForgetPasswordOTP from "../emails/templates/forget-password-otp.js";
import PasswordChangeConfirmation from "../emails/templates/password-change-confirmation.js";

export const renderEmail = ({ eventType, payload }: EmailNotification): Promise<string> => {
  if (eventType === emailNotificationEvents.enum.EMAIL_VERIFICATION_OTP) {
    return render(<EmailVerificationOTP {...payload} />);
  }

  if (eventType === emailNotificationEvents.enum.PASSWORD_CHANGE_CONFIRMATION) {
    return render(<PasswordChangeConfirmation {...payload} />);
  }

  if (eventType === emailNotificationEvents.enum.FORGET_PASSWORD_OTP) {
    return render(<ForgetPasswordOTP {...payload} />);
  }

  return Promise.resolve("");
};
