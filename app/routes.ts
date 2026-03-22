import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
  route("/", "routes/root-handler.tsx"),

  layout("routes/_lang-layout.tsx", [
    route(":lang/home", "pages/home/home.tsx"),
    route(":lang/testpage1", "pages/testpage1/testpage1.tsx"),
    route(":lang/testpage2", "pages/testpage2/testpage2.tsx"),
    route(":lang/kotsanas", "pages/kotsanas.tsx"),
  ]),

] satisfies RouteConfig;