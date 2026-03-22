import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import ActionButton from "./ActionButton";

import { GB, GR } from 'country-flag-icons/react/3x2'


export default function LanguageSwitcherFlags() {

  const { lang } = useParams();
  const { pathname } = useLocation();

  const getTransformedPath = (newLang: string) => {
    if (!lang) return `/${newLang}/home`;
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

    useEffect(() => {
      console.log('Changed Languge:', lang);
    }, [lang]);
  

  return (
    <nav className="flex gap-x-4">
      <ActionButton
        to={getTransformedPath("en")}
      >
        <GB title="English" className="w-6 md:w-14 " />

      </ActionButton>

      <ActionButton
        to={getTransformedPath("el")}
      >
        <GR title="Ελληνικά" className="w-6 md:w-14 " />

      </ActionButton>
    </nav>
  );
}