import React from "react";

import { Section } from "@react-email/components";

import { Typography } from "../components/ui/typography";
import { withEmailWrapper } from "../wrappers/withEmailWrapper";

interface ForgetPasswordOTPProps {
  otp: string;
  recipientName: string;
  otpTTL: number; // (TTL = Time To Live)
}

const ForgetPasswordOTPContent: React.FC<ForgetPasswordOTPProps> = ({
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
        We received a request to reset your password for your Ansopedia account. Please use the following One-Time
        Password (OTP) to verify your identity:
      </Typography>
      <Typography variant="h4">This is your OTP: {otp}</Typography>
      <Section className="my-6 rounded bg-gray-100 p-6 text-center">
        <Typography variant="h1" className="m-0 text-black">
          {otp}
        </Typography>
      </Section>
      <Typography variant="p" className="mb-4">
        This OTP is valid for {otpTTL} minutes. If you didn't request this password reset, please ignore this email or
        contact support immediately.
      </Typography>
    </>
  );
};

export const ForgetPasswordOTP = withEmailWrapper(ForgetPasswordOTPContent, {
  wrapperType: "default",
  previewText: "Your Ansopedia Password Reset OTP",
});

export default ForgetPasswordOTP;
