import { Button as EmailButton } from "@react-email/components";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmailButton className="block rounded bg-indigo-600 px-6 py-3 text-center text-base font-semibold text-white no-underline">
      {children}
    </EmailButton>
  );
};

export default Button;
