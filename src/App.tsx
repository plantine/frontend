import React, { FC } from "react";
import { style } from "typestyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { paragraphStyle } from "./styles/typography";
import { globalOverrides } from "./styles/overrides";
import { px } from "csx";

import { Dashboard } from "./pages/Dashboard";
import { Plants } from "./pages/Plants";
import { PlantDetail } from "./pages/Plants/id";

type Props = {};

const appClass = style(
  {
    paddingTop: px(40),
    paddingBottom: px(40),
  },
  globalOverrides,
  paragraphStyle
);

export const App: FC<Props> = () => {
  return (
    <div className={appClass}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/plants" component={Plants} />
          <Route path="/plants/:id" component={PlantDetail} />
        </Switch>
      </Router>
    </div>
  );
};
