import type { Route } from "./+types/home";

import { Home } from "../pages/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home page" },
    { name: "description", content: "Welcome to home page!" },
  ];
}

export default function RouteHome() {
  return <Home />;
}
