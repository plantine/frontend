import React, { FC } from "react";
import { style } from "typestyle";

type Props = {};

const cardClass = style({});

export const Card: FC<Props> = () => {
  return <div className={cardClass}>Card</div>;
};
