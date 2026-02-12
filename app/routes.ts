import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("testpage1", "routes/testpage1.tsx"),


  
] satisfies RouteConfig;