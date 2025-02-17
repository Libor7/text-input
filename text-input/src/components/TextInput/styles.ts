/** COMPONENTS */
import TextField from "@mui/material/TextField";

/** LIBRARIES */
import { styled } from "@mui/material";

/** STYLES */
import type { ColorVariant, Spacing, TypographyConfig } from "./types";

interface IStyledTextInputProps {
  colorvariant: ColorVariant;
  spacing: Spacing;
  typography: TypographyConfig;
}

export const StyledTextInput = styled(TextField)<IStyledTextInputProps>(
  ({ colorvariant, spacing, typography: { size, type } }) => {
    const typographyType = TYPOGRAPHY[type] as Record<
    TypographyConfig["size"],
    {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    }
    >;

    return {
      backgroundColor: STYLES[colorvariant].backgroundColor,
      border: `1px solid ${STYLES[colorvariant].borderColor}`,
      borderRadius: RADIUS.input,
      color: STYLES[colorvariant].textColor,
      fontSize: typographyType[size].fontSize,
      fontWeight: typographyType[size].fontWeight,
      letterSpacing: typographyType[size].letterSpacing,
      lineHeight: typographyType[size].lineHeight,
      padding: SPACING[spacing],

      "&:hover": {
        backgroundColor: STYLES[colorvariant].hover.backgroundColor,
        border: `1px solid ${STYLES[colorvariant].hover.borderColor}`,
      },

      "&:focus": {
        border: `1px solid ${STYLES[colorvariant].focus.borderColor}`,
      },

      "&:focus-visible": {
        border: `1px solid ${STYLES[colorvariant].focus.borderColor}`,
      },

      "&:focus-within": {
        border: `1px solid ${STYLES[colorvariant].focus.borderColor}`,
      },
    };
  }
);

export const COLORS = {
  XHigh: "#8C8C9A",
  XLow: "#FFFFFF",
  Brand: "#0050FF",
  Danger: "#DC2828",
  DangerVariant: "#FFDCDC",
  Warning: "#A56315",
  WarningVariant: "#FAF1B6",
};

export const STATE_COLORS = {
  defaultHover: "#1A1A1A0F",
  defaultFocus: "#1A1A1ACC",
};

export const CONTENT_COLORS = {
  onNeutralXXHigh: "#2C2C31",
  onNeutralMedium: "#8C8C9A",
  onNeutralLow: "#C9C9CE",
  onNeutralDanger: "#DC2828",
  onNeutralWarning: "#A56315",
};

export const RADIUS = {
  input: "12px",
};

export const SPACING = {
  xs: "8px",
  s: "12px",
  m: "16px",
  l: "20px",
};

const STYLES = {
  default: {
    backgroundColor: COLORS.XLow,
    borderColor: COLORS.XHigh,
    textColor: CONTENT_COLORS.onNeutralMedium,
    hover: {
      backgroundColor: STATE_COLORS.defaultHover,
      borderColor: COLORS.XHigh,
    },
    focus: {
      borderColor: STATE_COLORS.defaultFocus,
    },
  },
  brand: {
    backgroundColor: COLORS.XLow,
    borderColor: COLORS.Brand,
    textColor: COLORS.Brand,
    hover: {
      backgroundColor: STATE_COLORS.defaultHover,
      borderColor: COLORS.Brand,
    },
    focus: {
      borderColor: STATE_COLORS.defaultFocus,
    },
  },
  danger: {
    backgroundColor: COLORS.DangerVariant,
    borderColor: COLORS.Danger,
    textColor: CONTENT_COLORS.onNeutralDanger,
    hover: {
      backgroundColor: STATE_COLORS.defaultHover,
      borderColor: COLORS.Danger,
    },
    focus: {
      borderColor: STATE_COLORS.defaultFocus,
    },
  },
  warning: {
    backgroundColor: COLORS.WarningVariant,
    borderColor: COLORS.Warning,
    textColor: CONTENT_COLORS.onNeutralWarning,
    hover: {
      backgroundColor: STATE_COLORS.defaultHover,
      borderColor: COLORS.Warning,
    },
    focus: {
      borderColor: STATE_COLORS.defaultFocus,
    },
  },
};

export const TYPOGRAPHY = {
  label: {
    m: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "22px",
      letterSpacing: "0.16px",
    },
    s: {
      fontSize: "14px",
      fontWeight: 550,
      lineHeight: "17px",
      letterSpacing: "0.16px",
    },
  },
  body: {
    m: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0.01px",
      paragraphSpacing: "20px",
      listSpacing: "6px",
    },
  },
};
