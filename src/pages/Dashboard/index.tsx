import React, { FC } from "react";
import { style } from "typestyle";
import { Container } from "../../components/Container";

type Props = {};

const dashboardClass = style({});

export const Dashboard: FC<Props> = () => {
  return (
    <div className={dashboardClass}>
      <Container>Hello</Container>
    </div>
  );
};
