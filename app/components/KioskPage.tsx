import type { ReactNode } from "react";
import { cn } from "@sglara/cn";

import PageTitleWithBackButton from "./PageTitleWithBackButton";
import Navbar from "./Navbar";


export default function KioskPage({
  title,
  children,
  className = ""
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {

  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-white dark:bg-neutral-800">

      <nav className="h-20 flex place-items-stretch">
        <PageTitleWithBackButton title={title} />
      </nav>

      <main className="flex-1 overflow-y-auto custom-no-scrollbar">

        <main className="flex flex-col items-center justify-center">
          <div className={cn("flex-1 flex flex-col w-full min-h-0 ", className)}>
            {children}
          </div>
        </main>

      </main>

      {true && <nav className="h-20 flex place-items-stretch">
        <Navbar />
      </nav>
      }

    </div>







  );
}
