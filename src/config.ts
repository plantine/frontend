import { Dashboard } from "./pages/Dashboard";

export type Page = {
  path: string;
  name: string;
  component: any;
};

export const pages: Page[] = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
];

export const apolloConfig = {
  uri: "http://localhost:4100/graphql",
};
