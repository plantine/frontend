import React, { FC } from "react";
import { style } from "typestyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { pages, Page } from "./config";
import { paragraphStyle } from "./styles/typography";
import { globalOverrides } from "./styles/overrides";
import { px } from "csx";

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
          {pages.map(({ path, component }: Page) => (
            <Route exact path={path} component={component} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};
