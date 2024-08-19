import React from 'react';
import { render } from '@react-email/components';
import { EmailVerificationOTP } from '../emailTemplates/Email';
import { EmailNotification } from './email.validation';

export const renderEmail = ({ eventType, payload }: EmailNotification) => {
  if (eventType === 'sendEmailVerificationOTP') {
    return render(<EmailVerificationOTP {...payload} />);
  }

  return;
};
