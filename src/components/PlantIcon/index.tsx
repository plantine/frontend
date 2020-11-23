import { percent, px } from "csx";
import { relative } from "path";
import React, { FC } from "react";
import { style } from "typestyle";
import CactusIcon from "./assets/cactus.svg";

type Props = {
  icon: string;
};

const getIcon = (icon: string) => {
  switch (icon) {
    case "cactus":
      return CactusIcon;
    default:
      return CactusIcon;
  }
};

const iconClass = style({
  position: "relative",
  height: percent(100),
  width: percent(100),
  display: "block",
  margin: `${px(0)} auto`,
  $nest: {
    "& img": {
      position: "absolute",
      height: percent(100),
      width: "auto",
      left: percent(50),
      transform: `translateX(${percent(-50)})`,
    },
  },
});

export const PlantIcon: FC<Props> = ({ icon }) => {
  const iconToRender: string = getIcon(icon);

  return (
    <div className={iconClass}>
      <img src={iconToRender} alt="Plant icon" />
    </div>
  );
};
