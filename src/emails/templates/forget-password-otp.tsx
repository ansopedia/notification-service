import React from 'react';
import { withEmailWrapper } from '../wrappers/withEmailWrapper';
import { Section } from '@react-email/components';
import { Typography } from '../components/ui/typography';

interface ForgetPasswordOTPProps {
  otp: string;
  recipientName: string;
}

const ForgetPasswordOTPContent: React.FC<ForgetPasswordOTPProps> = ({ otp, recipientName }) => {
  return (
    <>
      <Typography variant="h4" className="mb-6">
        Hello {recipientName},
      </Typography>
      <Typography variant="p" className="mb-4">
        We received a request to reset your password for your Ansopedia account. Please use the following One-Time
        Password (OTP) to verify your identity:
      </Typography>
      <Typography variant="h4">This is your OTP: {otp}</Typography>
      <Section className="bg-gray-100 rounded p-6 text-center my-6">
        <Typography variant="h1" className="m-0 text-black">
          {otp}
        </Typography>
      </Section>
      <Typography variant="p" className="mb-4">
        This OTP is valid for 10 minutes. If you didn't request this password reset, please ignore this email or contact
        support immediately.
      </Typography>
    </>
  );
};

export const ForgetPasswordOTP = withEmailWrapper(ForgetPasswordOTPContent, {
  wrapperType: 'default',
  previewText: 'Your Ansopedia Password Reset OTP',
});

export default ForgetPasswordOTP;
