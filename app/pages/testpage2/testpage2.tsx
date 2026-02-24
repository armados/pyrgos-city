import type { Route } from "../../+types/root";

import { useTranslation } from "react-i18next";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Test page 2" },
    { name: "description", content: "Welcome to Test page 2" },
  ];
}

export default function TestPage2() {
  const { t } = useTranslation();

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
           test page 2
          </div>
        </header>
        ...
      </div>
    </main>
  );
}



