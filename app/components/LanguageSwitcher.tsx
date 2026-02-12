import { useParams, Link, useLocation } from "react-router";

export default function LanguageSwitcher() {

  const { lang } = useParams(); 
  const { pathname } = useLocation(); 

  const getTransformedPath = (newLang: string) => {
    if (!lang) return `/${newLang}/home`;
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  return (
    <nav className="flex gap-4">
      <Link 
        to={getTransformedPath("en")} 
        className={lang === 'en' ? 'font-bold underline' : ''}
      >
        English
      </Link>
      
      <Link 
        to={getTransformedPath("el")} 
        className={lang === 'el' ? 'font-bold underline' : ''}
      >
        Ελληνικά
      </Link>
    </nav>
  );
}