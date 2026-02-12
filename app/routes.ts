import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
  // Parent layout that captures the :lang parameter
  layout("routes/_lang-layout.tsx", [
    route(":lang/home", "routes/home.tsx"),
    route(":lang/testpage1", "routes/testpage1.tsx"),
    // Add other localized pages here
  ]),
  
  // Optional: Redirect root "/" to default language "/en/home"
 // route("/", "routes/redirect-to-default.tsx"),

] satisfies RouteConfig;