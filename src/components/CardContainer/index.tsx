import { percent } from "csx";
import React, { FC } from "react";
import { media, style } from "typestyle";
import { lg, md, sm, xs } from "../../styles/responsive";

type Props = {};

const cardContainerClass = style(
  {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    $nest: {
      "& > div": {
        width: percent(25),
      },
    },
  },
  media(
    { minWidth: 0, maxWidth: sm },
    {
      $nest: {
        "& > div": {
          width: percent(100),
        },
      },
    }
  ),
  media(
    { minWidth: sm + 1, maxWidth: lg },
    {
      $nest: {
        "& > div": {
          width: percent(50),
        },
      },
    }
  ),
  media(
    { minWidth: lg + 1 },
    {
      $nest: {
        "& > div": {
          width: percent(25),
        },
      },
    }
  )
);

export const CardContainer: FC<Props> = ({ children }) => {
  return <div className={cardContainerClass}>{children}</div>;
};
