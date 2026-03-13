import { useTheme } from "~/hooks/useTheme";
import type { Theme } from "~/hooks/useTheme";
import ActionButton from "./ActionButton";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const btn = (value: Theme, label: string) => (
        <ActionButton
            onClick={() => setTheme(value)}
            className={`px-2 ${theme === value ? "" : ""
                }`}
        >
            {label}
        </ActionButton>
    );

    return (
        <>
            {theme === "light" ?
                btn("dark", "🌙")
                :
                btn("light", "☀️")
            }
        </>
    );
}
