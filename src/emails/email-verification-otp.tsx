import React from 'react';
import { Html } from '@react-email/components';
import { EmailVerificationOTPPayload } from '../utils/email.validation';

const EmailVerificationOTP: React.FC<EmailVerificationOTPPayload> = ({ otp }) => {
  return (
    <Html lang="en">
      <p>Your OTP is: {otp}</p>
    </Html>
  );
};

export default EmailVerificationOTP;
