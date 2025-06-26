import React from "react";

import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

export const Footer: React.FC = () => {
  return (
    <Section className="rounded-b-lg bg-black p-5 text-center">
      <Text className="mb-2 text-sm text-white">Follow us on</Text>
      <Row>
        <Column align="center">
          <Link href="https://x.com/AnsopediaGroup" className="mx-2 inline-block rounded p-1">
            <Img
              src="https://res.cloudinary.com/ddhtmkllj/image/upload/v1729678227/ansopedia/email/twitter_x_email_template_rxtxk9.png"
              width="24"
              height="24"
              alt="X"
              className="block"
            />
          </Link>
          <Link href="https://facebook.com/ansopediagroup" className="mx-2 inline-block rounded p-1">
            <Img
              src="https://res.cloudinary.com/ddhtmkllj/image/upload/v1729678378/ansopedia/email/facebook_email_template_nltp99.png"
              width="24"
              height="24"
              alt="Facebook"
              className="block"
            />
          </Link>
          <Link href="https://instagram.com/ansopedia" className="mx-2 inline-block rounded p-1">
            <Img
              src="https://res.cloudinary.com/ddhtmkllj/image/upload/v1730182870/ansopedia/email/instagram_email_template_avxxzr.png"
              width="24"
              height="24"
              alt="Instagram"
              className="block"
            />
          </Link>
        </Column>
      </Row>
      <Text className="mt-2 text-sm text-white">©{new Date().getFullYear()} Ansopedia. All rights reserved.</Text>
    </Section>
  );
};

export default Footer;
