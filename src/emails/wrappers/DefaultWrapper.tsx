import { Body, Container, Head, Html, Preview, Section, Tailwind } from "@react-email/components";

import { Footer } from "@/components/Footer.js";
import { Header } from "@/components/Header.js";

import type { BaseWrapper, BaseWrapperProps } from "./BaseWrapper.js";

export const DefaultWrapper: BaseWrapper = ({ children, previewText }: BaseWrapperProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-gray-100 px-2 font-sans">
          <Container className="mx-auto w-full max-w-[600px] py-5">
            <Header />
            <Section className="rounded bg-white p-6 shadow">{children}</Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
