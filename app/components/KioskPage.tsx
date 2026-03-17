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
    <div className="flex flex-col h-dvh overflow-hidden bg-white dark:bg-black">

      <nav className="h-20 flex place-items-stretch">
        <PageTitleWithBackButton title={title} />
      </nav>

 
        <main className={cn("flex-1 overflow-y-auto custom-no-scrollbar", className)}>
            {children}
        </main>


      {true && <nav className="h-20 flex place-items-stretch">
        <Navbar />
      </nav>
      }

    </div>







  );
}
