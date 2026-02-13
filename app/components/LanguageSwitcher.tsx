import { useParams, Link, useLocation } from "react-router";
import ActionButton from "./ActionButton";

export default function LanguageSwitcher() {

  const { lang } = useParams(); 
  const { pathname } = useLocation(); 

  const getTransformedPath = (newLang: string) => {
    if (!lang) return `/${newLang}/home`;
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  return (
    <nav className="flex gap-4">
      <ActionButton 
        to={getTransformedPath("en")} 
        className={lang === 'en' ? 'font-bold' : ''}
      >
        English
      </ActionButton>
      
      <ActionButton 
        to={getTransformedPath("el")} 
        className={lang === 'el' ? 'font-bold' : ''}
      >
        Ελληνικά
      </ActionButton>
    </nav>
  );
}