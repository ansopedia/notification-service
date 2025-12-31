import React from "react";

import { Column, Img, Row, Section, Text } from "@react-email/components";

export const Header: React.FC = () => {
  return (
    <Section className="rounded-t-lg bg-black p-6">
      <Row className="flex items-center justify-between">
        <Column>
          <Img
            src="https://avatars.githubusercontent.com/u/123801647?s=200&v=4"
            width="40"
            height="40"
            alt="Ansopedia Logo"
            className="mr-2 inline-block align-middle"
          />
        </Column>
        <Column>
          <Text className="m-0 inline-block align-middle font-sans text-2xl font-bold tracking-wider text-white uppercase">
            Ansopedia
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default Header;
