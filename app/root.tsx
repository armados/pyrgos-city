import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

// Initialize i18n globally
import "~/i18n";

/**
 * Supported Fonts / Links
 */
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght,CRSV@100..900,0&display=swap",
  },
];

/**
 * Layout component wraps the HTML shell
 * i18n is NOT handled here — only document-level stuff
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

      {/* Prevent light/dark flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme");
                  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

                  if (theme === "dark" || (theme === "system" && systemDark)) {
                    document.documentElement.classList.add("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />

      </head>
      <body className="select-none">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}


export default function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {/* Global Spinner or Progress Bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50" />
      )}

      <div className={isLoading ? "opacity-50 transition-opacity" : ""}>
        <Outlet />
      </div>
    </>
  )
}

