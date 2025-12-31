import React from "react";

import type { PasswordChangeConfirmationPayload } from "@ansospace/types";
import { Section } from "@react-email/components";

import { Typography } from "@/components/ui/typography.js";
import { withEmailWrapper } from "@/wrappers/withEmailWrapper.js";

const defaultProps: PasswordChangeConfirmationPayload = {
  recipientName: "User",
};

const PasswordChangeConfirmationContent: React.FC<PasswordChangeConfirmationPayload> = (props) => {
  const { recipientName } = { ...defaultProps, ...props };

  return (
    <>
      <Typography variant="h4" className="mb-6">
        Hello {recipientName},
      </Typography>
      <Typography variant="p" className="mb-4">
        This is a confirmation that your password for your Ansopedia account has been successfully changed.
      </Typography>
      <Section className="my-6 rounded bg-gray-100 p-6 text-center">
        <Typography variant="h2" className="m-0 text-black">
          Password Changed Successfully
        </Typography>
      </Section>
      <Typography variant="p" className="mb-4">
        If you did not make this change, please contact our support team immediately to secure your account.
      </Typography>
      <Typography variant="p" className="mb-4">
        Thank you for using Ansopedia.
      </Typography>
    </>
  );
};

export const PasswordChangeConfirmation = withEmailWrapper(PasswordChangeConfirmationContent, {
  wrapperType: "default",
  previewText: "Your Ansopedia Password Has Been Changed",
});

export default PasswordChangeConfirmation;
