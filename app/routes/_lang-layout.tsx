import { Outlet, useParams, Navigate } from "react-router";
import { useEffect } from "react";
import i18n from "~/i18n";
import Navbar from "~/components/Navbar";
import LanguageSwitcher from "~/components/LanguageSwitcher";

const supportedLanguages = ["en", "el"];

export default function LangLayout() {
    const { lang } = useParams();

    if (!lang || !supportedLanguages.includes(lang)) {
        return <Navigate to="/en/home" replace />;
    }

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <div className="flex flex-col h-dvh overflow-hidden">

            <nav className="h-[24] border-b border-gray-200 flex items-center justify-around px-6">
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
