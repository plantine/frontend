import React, { FC } from "react";
import { Plant } from "../../interfaces";
import { style } from "typestyle";
import { percent, px } from "csx";
import { Link } from "react-router-dom";

import { PlantIcon } from "../PlantIcon";
import { green, red } from "../../styles/colors";
import { ProgressBar } from "../ProgressBar";

type Props = Plant & {};

const plantCardContainerClass = style({
  padding: px(10),
});

const plantCardClass = style({
  padding: px(40),
  borderRadius: px(10),
  boxShadow: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
  textTransform: "lowercase",
  $nest: {
    "& label": {
      fontSize: px(12),
    },
  },
});

const plantIconContainerClass = style({
  height: px(250),
  width: percent(100),
  position: "relative",
});

export const PlantCard: FC<Props> = ({
  id,
  name,
  description,
  lightRequired,
  wateringRequired,
  icon,
}) => {
  return (
    <div className={plantCardContainerClass}>
      <div className={plantCardClass}>
        <div className={plantIconContainerClass}>
          <PlantIcon icon="cactus" />
        </div>
        <Link to={`/plants/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
        <label>Amount of light required:</label>
        <ProgressBar color={red} progress={lightRequired} />
        <label>Amount of watering required:</label>
        <ProgressBar color={green} progress={wateringRequired} />
      </div>
    </div>
  );
};
