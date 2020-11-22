import { NestedCSSProperties } from "typestyle/lib/types";
import { black, white } from "./colors";

export const globalOverrides: NestedCSSProperties = {
  $nest: {
    "html, body": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      backgroundColor: black.toHexString(),
      color: white.toHexString(),
    },
    "*": {
      boxSizing: "border-box",
    },
  },
};
