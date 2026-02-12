import { useTheme } from "~/hooks/useTheme";
import type { Theme } from "~/hooks/useTheme";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const btn = (value: Theme, label: string) => (
        <button
            onClick={() => setTheme(value)}
            className={`px-2 ${
                theme === value ? "bg-gray-300 rounded-md " : ""
            }`}
        >
            {label}
        </button>
    );

    return (
        <div className="flex gap-2">
            {btn("light", "☀️")}
            {btn("dark", "🌙")}
            {btn("system", "🖥️")}
        </div>
    );
}
