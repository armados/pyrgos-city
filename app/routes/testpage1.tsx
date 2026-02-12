import type { Route } from "../+types/root";

import { TestPage1 } from "../pages/testpage1/testpage1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test page 1" },
    { name: "description", content: "Welcome to Test page 1" },
  ];
}

export default function RouteTestPage1() {
  return <TestPage1 />;
}
