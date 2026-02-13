import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";

import { IoMdHome } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import ActionButton from "./ActionButton";


export default function Navbar() {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className="flex w-full justify-center text-2xl border-t border-gray-300 divide-x divide-gray-300 divide-solid">
      <ActionButton to={`/${lang}/home`} className="inline-flex items-center gap-2 py-3 px-8">
          <IoMdHome className="w-6 h-6 text-blue-700" /> <span>{t("nav.home")}</span>
      </ActionButton>

      <ActionButton to={`/${lang}/testpage1`} className="inline-flex items-center gap-2 py-3 px-8">
          <IoBagHandle className="w-6 h-6 text-blue-700" /> <span>{t("nav.testpage1")}</span>
      </ActionButton>


      <ActionButton to={`/${lang}/testpage1`} className="inline-flex items-center gap-2 py-3 px-8">
          <IoBagHandle className="w-6 h-6 text-blue-700" /> <span>{t("nav.testpage1")}</span>
      </ActionButton>


      <ActionButton to={`/${lang}/testpage1`} className="inline-flex items-center gap-2 py-3 px-8">
          <IoBagHandle className="w-6 h-6 text-blue-700" /> <span>{t("nav.testpage1")}</span>
      </ActionButton>

    </div>
  );
}
