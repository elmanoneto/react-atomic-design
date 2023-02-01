import { extendBaseTheme } from "@chakra-ui/react";
import { inputStyle } from "./InputStyle";

export const theme = extendBaseTheme({
  styles: {
    global: () => ({
      body: {
        background: "#F3F3F6",
      },
    }),
  },
  colors: {
    primary: "#10159A",
    secondary: "#FFBE00",
  },
  components: {
    Input: { ...inputStyle },
  },
});
