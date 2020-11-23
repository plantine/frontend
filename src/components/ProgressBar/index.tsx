import React, { FC, useEffect, useState } from "react";
import { style } from "typestyle";
import { px, percent, ColorHelper } from "csx";
import { NestedCSSProperties } from "typestyle/lib/types";
import { useTransform, useSpring, useMotionValue } from "framer-motion";
import { black } from "../../styles/colors";

type Props = {
  progress: number;
  color: ColorHelper;
};

function progressGradient(color: ColorHelper): NestedCSSProperties {
  return {
    $nest: {
      "&::-webkit-progress-value": {
        backgroundImage: `-webkit-linear-gradient(top, rgba(255, 255, 255, .25), rgba(0, 0, 0, .25)), -webkit-linear-gradient(left, ${color
          .lighten(0.3)
          .toHexString()}, ${color.toHexString()})`,
      },
    },
  };
}

const progressBarStyle: NestedCSSProperties = {
  display: "block",
  width: percent(100),
  appearance: "none",
  height: px(25),
  marginTop: px(10),
  marginBottom: px(20),
  $nest: {
    "&::-webkit-progress-bar": {
      backgroundColor: black.lighten(0.1).toHexString(),
      borderRadius: px(5),
    },
    "&::-webkit-progress-value": {
      borderRadius: px(5),
    },
  },
};

export const ProgressBar: FC<Props> = ({ progress, color }) => {
  const progressMotion = useMotionValue(0);
  const progressRange = useTransform(progressMotion, [0, 10], [0, 100]);
  const progressSpring = useSpring(progressRange, {
    stiffness: 120,
    damping: 25,
  });

  const [progressState, setProgressState]: [number, Function] = useState(0);

  const progressBarClass = style(progressBarStyle, progressGradient(color));

  const onProgressChange = (v: number) => setProgressState(v);

  useEffect(() => {
    progressSpring.onChange(onProgressChange);
    progressMotion.set(progress);

    return () => {
      progressSpring.destroy();
    };
  }, []);

  return (
    <progress className={progressBarClass} value={progressState} max={100}>
      {Math.round(progressState)} %
    </progress>
  );
};
