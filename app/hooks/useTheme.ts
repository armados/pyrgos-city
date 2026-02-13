import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "system";

        return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
    });

    useEffect(() => {
        const root = document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = () => {
            const systemDark = mediaQuery.matches;
            const isDark =
                theme === "dark" || (theme === "system" && systemDark);

            root.classList.toggle("dark", isDark);
        };

        applyTheme();
        localStorage.setItem(STORAGE_KEY, theme);

        if (theme === "system") {
            mediaQuery.addEventListener("change", applyTheme);
            return () =>
                mediaQuery.removeEventListener("change", applyTheme);
        }
    }, [theme]);

    return { theme, setTheme };
}
