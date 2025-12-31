import { type BaseWrapper } from "./BaseWrapper.js";
import { DefaultWrapper } from "./DefaultWrapper.js";

export type WrapperType = "default" | "minimal" | "branded";

const emailWrappers: Record<WrapperType, BaseWrapper> = {
  default: DefaultWrapper,
  minimal: DefaultWrapper, // TODO Replace with MinimalWrapper when implemented
  branded: DefaultWrapper, // TODO Replace with BrandedWrapper when implemented
};

export const getEmailWrapper = (type: WrapperType = "default"): BaseWrapper => {
  return emailWrappers[type];
};
