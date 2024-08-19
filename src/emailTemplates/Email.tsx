import React from 'react';
import { Html } from '@react-email/components';
import { EmailVerificationOTPPayload } from '../utils/email.validation';

export const EmailVerificationOTP: React.FC<EmailVerificationOTPPayload> = ({ otp }) => {
  return (
    <Html lang="en">
      <p>{otp}</p>
    </Html>
  );
};
