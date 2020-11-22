import { percent, px } from "csx";
import React, { FC } from "react";
import { media, style } from "typestyle";
import { xs, sm, md, lg, xl } from "../../styles/responsive";

type Props = {};

const containerClass = style(
  {
    width: percent(100),
    padding: px(40),
    margin: `${px(0)} auto`,
  },
  media(
    { minWidth: 0, maxWidth: xs },
    {
      padding: px(10),
      maxWidth: px(xs),
    }
  ),
  media(
    {
      minWidth: xs + 1,
      maxWidth: sm,
    },
    {
      padding: px(20),
      maxWidth: px(xs),
    }
  ),
  media(
    { minWidth: sm + 1, maxWidth: md },
    {
      maxWidth: px(sm),
    }
  ),
  media(
    { minWidth: md + 1, maxWidth: lg },
    {
      maxWidth: px(md),
    }
  ),
  media(
    { minWidth: lg + 1, maxWidth: xl },
    {
      maxWidth: px(lg),
    }
  )
);

export const Container: FC<Props> = ({ children }) => {
  return <div className={containerClass}>{children}</div>;
};
