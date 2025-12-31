import { type WrapperType, getEmailWrapper } from "./WrapperFactory.js";

interface WithEmailWrapperOptions {
  wrapperType?: WrapperType;
  previewText: string;
}

export const withEmailWrapper = <T extends Record<string, unknown>>(
  WrappedComponent: React.FC<T>,
  options: WithEmailWrapperOptions
) => {
  const Wrapper = getEmailWrapper(options.wrapperType);

  const WithEmailWrapper: React.FC<T> = (props) => (
    <Wrapper previewText={options.previewText}>
      <WrappedComponent {...props} />
    </Wrapper>
  );

  return WithEmailWrapper;
};
