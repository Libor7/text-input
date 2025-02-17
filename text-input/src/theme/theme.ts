/** LIBRARIES */
import { createTheme } from "@mui/material/styles";

/** STYLES */
import { RADIUS } from "@src/components/TextInput/styles";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS.input,

          "& fieldset": {
            border: "none",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        },
      },
    },
  },
});
