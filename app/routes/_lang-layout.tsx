import { Outlet, useParams, Navigate } from "react-router";
import { useEffect, useState } from "react";
import i18n from "~/i18n";
import Navbar from "~/components/Navbar";
import LanguageSwitcher from "~/components/LanguageSwitcher";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import TextSizeController from "~/components/TextSizeController";

const supportedLanguages = ["en", "el"];

export default function LangLayout() {
    const { lang } = useParams();
    const [ready, setReady] = useState(false);

    if (!lang || !supportedLanguages.includes(lang)) {
        return <Navigate to="/en/home" replace />;
    }

    useEffect(() => {
        setReady(false);

        i18n.changeLanguage(lang).then(() => {
            setReady(true);
        });
    }, [lang]);

    if (!ready) {
        return null; // or a spinner / skeleton
        // return <LoadingScreen />
    }

    return (
        <div className="flex flex-col h-dvh overflow-hidden bg-white dark:bg-neutral-800">
            <nav className="h-[24] border-b border-gray-200 dark:border-gray-800 flex items-center justify-around px-6">
                <ThemeSwitcher />
                <TextSizeController />
                <LanguageSwitcher />
            </nav>

            <main className="flex-1 overflow-y-auto p-4">
                <Outlet />
            </main>

            <nav className="h-20 flex place-items-stretch">
                <Navbar />
            </nav>
        </div>
    );
}
