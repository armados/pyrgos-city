import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

import { IoMdHome } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import ActionButton from "./ActionButton";


export default function Navbar() {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className="flex w-full justify-center text-2xl border-t border-stone-300 dark:border-stone-600 divide-x divide-stone-300 dark:divide-stone-600 divide-solid">

      <ActionButton to={`/${lang}/home`} className="inline-flex items-center gap-4 py-2 px-10">
        <IoMdHome className="w-6 h-6 text-blue-700" />
        <span>{t("nav.home")}</span>
      </ActionButton>

      <ActionButton to={`/${lang}/testpage1`} className="inline-flex items-center gap-4 py-2 px-10">
        <IoBagHandle className="w-6 h-6 text-purple-500" />
        <span>{t("nav.testpage1")}</span>
      </ActionButton>

      <ActionButton to={`/${lang}/testpage2`} className="inline-flex items-center gap-4 py-2 px-10">
        <IoBagHandle className="w-6 h-6 text-red-500" />
        <span>{t("nav.testpage2")}</span>
      </ActionButton>

    </div>
  );
}
