import React from "react";

import { Section } from "@react-email/components";

import { Typography } from "../components/ui/typography";
import { withEmailWrapper } from "../wrappers/withEmailWrapper";

interface EmailVerificationOTPProps {
  otp: string;
  recipientName: string;
  otpTTL: number; // (TTL = Time To Live)
}

const EmailVerificationOTPContent: React.FC<EmailVerificationOTPProps> = ({
  otp = "123456",
  recipientName = "User",
  otpTTL = 5,
}) => {
  return (
    <>
      <Typography variant="h4" className="mb-6">
        Hello {recipientName},
      </Typography>
      <Typography variant="p" className="mb-4">
        Thank you for signing up with Ansopedia. To complete your registration, please use the following One-Time
        Password (OTP):
      </Typography>
      <Section className="my-6 rounded bg-gray-100 p-6 text-center">
        <Typography variant="h1" className="letter-spacing-2 m-0 text-black">
          {otp}
        </Typography>
      </Section>
      <Typography variant="p" className="mb-4">
        This OTP is valid for {otpTTL} minutes. If you didn't request this verification, please ignore this email.
      </Typography>
    </>
  );
};

export const EmailVerificationOTP = withEmailWrapper(EmailVerificationOTPContent, {
  wrapperType: "default",
  previewText: "Your Ansopedia Email Verification OTP",
});

export default EmailVerificationOTP;
