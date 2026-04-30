import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

import { IoMdHome } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import ActionButton from "./ActionButton";

import { RiSignpostFill } from "react-icons/ri";


export default function Navbar() {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className="flex w-full justify-center text-xl border-t border-stone-300 dark:border-neutral-600 divide-x divide-stone-300 dark:divide-neutral-600 divide-solid  bg-white dark:bg-neutral-700">

      <ActionButton to={`/${lang}/home`} className="inline-flex items-center gap-4 py-2 px-10">
        <IoMdHome className="w-6 h-6 text-blue-700" />
        <h4 className="hidden md:block">{t("nav.home")}</h4>
      </ActionButton>


      <ActionButton to={`/${lang}/kotsanas`} className="inline-flex items-center gap-4 py-2 px-10">
        <RiSignpostFill className="w-6 h-6 text-red-500" />
        <h4 className="hidden md:block">{t("nav.kotsanas")}</h4>
      </ActionButton>

    </div>
  );
}
