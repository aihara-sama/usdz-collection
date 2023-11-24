import type { ThemeOptions } from "@mui/material";
import { fontFamily } from "fonts";

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: () => ({
      "html, body, #__next": {
        height: "100%",
      },
    }),
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily,
};

export const baseTheme: ThemeOptions = {
  components,
  typography,
};
