import { render } from '@react-email/components';
import { EmailVerificationOTP } from '@/emails';
import { NotificationType, EmailNotification } from './email.validation';
import PasswordChangeConfirmation from '../emails/templates/password-change-confirmation';
import ForgetPasswordOTP from '../emails/templates/forget-password-otp';

export const renderEmail = ({ eventType, payload }: EmailNotification): string => {
  if (eventType === NotificationType.EMAIL_VERIFICATION_OTP) {
    return render(<EmailVerificationOTP {...payload} />);
  }

  if (eventType === NotificationType.PASSWORD_CHANGE_CONFIRMATION) {
    return render(<PasswordChangeConfirmation {...payload} />);
  }

  if (eventType === NotificationType.FORGET_PASSWORD_OTP) {
    return render(<ForgetPasswordOTP {...payload} />);
  }

  return '';
};
