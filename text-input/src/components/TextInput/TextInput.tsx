/** COMPONENTS */
import { type TextFieldProps } from "@mui/material/TextField";

/** LIBRARIES */
import { ThemeProvider } from "@mui/material/styles";
import { type FC, useCallback, useState } from "react";

/** TYPES */
import { type ITextInputProps, type IValidationHandlers } from "./types";

/** STYLES */
import CssBaseline from "@mui/material/CssBaseline";
import { StyledTextInput } from "./styles";
import { theme } from "@src/theme/theme";

const ARIA_LABEL_GENERIC = "The value is not valid";
const ERROR_MESSAGE_GENERIC = "The value is not valid";

const TextInput: FC<
  TextFieldProps & Partial<ITextInputProps> & IValidationHandlers
> = ({
  ariaLabel = ARIA_LABEL_GENERIC,
  colorVariant = "default",
  errorMsg = ERROR_MESSAGE_GENERIC,
  handlers,
  spacing = "xs",
  typography = { size: "m", type: "label" },
  variant = "outlined",
  ...otherProps
}) => {
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const inValid = touched && !valid;

  const blurHandler = useCallback(() => {
    if (!touched) setTouched(true);
  }, [touched]);

  const changeHandler = useCallback(
    ({
      currentTarget,
    }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const validationResult = handlers.every((handler) =>
        handler(currentTarget.value)
      );
      setValid(validationResult);
    },
    [handlers]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledTextInput
        {...otherProps}
        aria-label={ariaLabel}
        colorvariant={inValid ? "danger" : colorVariant}
        error={inValid}
        fullWidth
        helperText={inValid ? errorMsg : null}
        onBlur={blurHandler}
        onChange={changeHandler}
        spacing={spacing}
        typography={typography}
        variant={variant}
      />
    </ThemeProvider>
  );
};

export default TextInput;
