import { render } from "@react-email/components";

import { EmailVerificationOTP } from "@/emails";

import ForgetPasswordOTP from "../emails/templates/forget-password-otp";
import PasswordChangeConfirmation from "../emails/templates/password-change-confirmation";
import { EmailNotification, NotificationType } from "./email.validation";

export const renderEmail = ({ eventType, payload }: EmailNotification): Promise<string> => {
  if (eventType === NotificationType.EMAIL_VERIFICATION_OTP) {
    return render(<EmailVerificationOTP {...payload} />);
  }

  if (eventType === NotificationType.PASSWORD_CHANGE_CONFIRMATION) {
    return render(<PasswordChangeConfirmation {...payload} />);
  }

  if (eventType === NotificationType.FORGET_PASSWORD_OTP) {
    return render(<ForgetPasswordOTP {...payload} />);
  }

  return Promise.resolve("");
};
