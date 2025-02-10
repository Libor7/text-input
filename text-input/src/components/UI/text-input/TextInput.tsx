/** COMPONENTS */
import { type TextFieldProps } from "@mui/material/TextField";

/** HELPERS */
import { ARIA_LABEL_GENERIC, ERROR_MESSAGE_GENERIC } from "./constants";

/** LIBRARIES */
import { type FC, useCallback, useState } from "react";

/** TYPES */
import { type ITextInputProps, type IValidationHandlers } from "./types";

/** STYLES */
import { StyledTextInput } from "./styles";

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
  );
};

export default TextInput;
