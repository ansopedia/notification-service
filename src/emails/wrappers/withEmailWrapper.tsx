import React from "react";

import { WrapperType, getEmailWrapper } from "./WrapperFactory";

interface WithEmailWrapperOptions {
  wrapperType?: WrapperType;
  previewText: string;
}

export const withEmailWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithEmailWrapperOptions
) => {
  const Wrapper = getEmailWrapper(options.wrapperType);

  const WithEmailWrapper: React.FC<P> = (props) => (
    <Wrapper previewText={options.previewText}>
      <WrappedComponent {...props} />
    </Wrapper>
  );

  return WithEmailWrapper;
};
