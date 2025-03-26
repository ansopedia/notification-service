import { render } from '@react-email/components';
import { EmailVerificationOTP } from '@/emails';
import { EmailEventType, EmailNotification } from './email.validation';
import PasswordChangeConfirmation from '../emails/templates/password-change-confirmation';
import ForgetPasswordOTP from '../emails/templates/forget-password-otp';

export const renderEmail = ({ eventType, payload }: EmailNotification): string => {
  if (eventType === EmailEventType.sendEmailVerificationOTP) {
    return render(<EmailVerificationOTP {...payload} />);
  }

  if (eventType === EmailEventType.sendPasswordChangeConfirmation) {
    return render(<PasswordChangeConfirmation {...payload} />);
  }

  if (eventType === EmailEventType.sendForgetPasswordOTP) {
    return render(<ForgetPasswordOTP {...payload} />);
  }

  return '';
};
