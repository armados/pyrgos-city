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
        <>
            <div className="pb-14">
                <LanguageSwitcher />
                <Outlet />
            </div>
            <Navbar />
        </>
    );
}
