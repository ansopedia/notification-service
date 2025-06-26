# Changelog

## [1.3.0] - 2025-06-26

- Enhance OTP Email Template (#18)
  - New `otpTTL` field (in minutes) is now required for OTP-related event types:
    - `forgetPasswordOtp`: Controls password reset OTP expiration
    - `emailVerificationOtp`: Controls email verification OTP expiration
  - Add default values and TTL field
  - Update styling and formatting
  - Refresh footer content

## [1.2.0] - 2025-06-24

- Update all dependencies to their latest versions (#21)
  - Notable: React 19, Express 5, Nodemailer 7.

## [1.1.0] - 2025-03-26

- New `Typography` component (#7)
- New `ForgetPasswordOTP` & `PasswordChangeConfirmation` template (#15)

## [1.0.0] - 2024-10-29

- New reusable UI components:
  - `Header` component (#8)
  - `Footer` component (#8)
  - `Button` component (#6)
- Email verification system:
  - `EmailVerificationOTP` template for OTP-based verification (#10)
  - `EmailWrapper` component (#11)
  - `WithEmailWrapper` Higher-Order Component (HOC) (#11)
- Factory Design Pattern implementation using HOC in React (#11)
- `recipientName` & `otp` fields in `emailVerificationOTPPayload` (#11)

### Changed

- Integrated Tailwind CSS for styling across components (#8)

### Improved

- Enhanced code reusability and maintainability through the use of design patterns and HOCs (#11)
- Standardized UI styling with Tailwind CSS (#8)

### Developer Notes

- The new email verification system utilizes a Factory Design Pattern with Higher-Order Components in React. This approach allows for more flexible and extensible email-related functionality.
- Developers should now use the WithEmailWrapper HOC when creating new email-related components to ensure consistent behavior and styling.
- The addition of the `recipientName` field in `emailVerificationOTPPayload` allows for more personalized email verification messages.
