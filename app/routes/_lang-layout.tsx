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
        return null; // or a spinner, skeleton, return <LoadingScreen />
    }

    return (
    
                <Outlet />
   
    );
}
