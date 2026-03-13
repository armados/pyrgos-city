import type { ReactNode } from "react";

import PageTitleWithBackButton from "./PageTitleWithBackButton";


export default function KioskPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {

  return (
    <main className="flex flex-col items-center justify-center ">

      <PageTitleWithBackButton title={title} />

      <div className="flex-1 flex flex-col items-center min-h-0 px-4 pt-16 pb-4">
        {children}
      </div>
    </main>
  );
}
