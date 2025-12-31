import * as React from "react";

import { Heading, Text } from "@react-email/components";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils.js";

const typographyVariants = cva("text-foreground leading-[130%]", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold",
      h3: "scroll-m-20 text-2xl font-semibold",
      h4: "scroll-m-20 text-xl font-semibold",
      h5: "scroll-m-20 text-lg font-semibold",
      h6: "scroll-m-20 text-base font-semibold",
      p: "leading-7",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      largeText: "text-lg font-semibold",
      smallText: "text-sm font-medium leading-none",
      mutedText: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {}

const Typography = ({ className, variant, children, ...props }: TypographyProps) => {
  // Use Heading component for h1-h6 variants
  if (typeof variant === "string" && variant.startsWith("h")) {
    const level = parseInt(variant.charAt(1)) as 1 | 2 | 3 | 4 | 5 | 6;
    return (
      <Heading as={`h${level}`} className={cn(typographyVariants({ variant, className }))} {...props}>
        {children}
      </Heading>
    );
  }

  // Use Text component for all other variants
  return (
    <Text className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </Text>
  );
};

Typography.displayName = "Typography";

export { Typography, typographyVariants };
