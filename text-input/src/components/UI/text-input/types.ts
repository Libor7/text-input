export interface ITextInputProps {
  ariaLabel: string;
  colorVariant: ColorVariant;
  errorMsg: string;
  spacing: Spacing;
  typography: TypographyConfig;
}

export interface IValidationHandlers {
  handlers: ValidationHandler[];
}

export type ColorVariant = "brand" | "danger" | "default" | "warning";

export type Spacing = "l" | "m" | "s" | "xs";

export type TypographyBody = { type: "body"; size: "m" };

export type TypographyLabel = { type: "label"; size: "m" | "s" };

export type TypographyConfig = TypographyBody | TypographyLabel;

type ValidationHandler = (value: string) => boolean;
