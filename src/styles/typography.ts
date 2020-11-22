import { cssRaw } from "typestyle";
import { NestedCSSProperties } from "typestyle/lib/types";

cssRaw(
  `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');`
);

export const paragraphStyle: NestedCSSProperties = {
  $nest: {
    "p, span, div": {
      fontFamily: "Roboto, sans-serif",
    },
  },
};
