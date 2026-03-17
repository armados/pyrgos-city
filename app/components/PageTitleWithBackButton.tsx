import { useParams, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import { IoMdHome } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import ActionButton from "./ActionButton";
import LanguageSwitcherFlags from "~/components/LanguageSwitcherFlags";

import { useNavigate } from "react-router";
import TextSizeController from "./TextSizeController";
import ThemeSwitcher from "./ThemeSwitcher";

import { IoArrowBackCircleOutline } from "react-icons/io5";


export default function PageTitleWithBackButton({ title }: { title: string }) {
  const { lang } = useParams();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();

  const currentPage = location.pathname.split("/")[2];

  return (
    <div className="flex w-full justify-around border-b border-stone-300 dark:border-neutral-600 divide-x divide-gray-300 dark:divide-neutral-600 divide-solid bg-[#f6f6f6] dark:bg-[#181818]">

      {currentPage != 'home' && <>

        <ActionButton to={`/${lang}/home`} className="inline-flex items-center py-2 px-8">
          <IoMdHome className="w-8 h-8 text-black dark:text-white" />
        </ActionButton>

        <ActionButton
          onClick={() => navigate(-1)}
          className="inline-flex items-center py-2 px-8">
          <IoArrowBackCircleOutline className="w-8 h-8 text-black dark:text-white" />
        </ActionButton>

      </>}

      <div className="flex flex-grow items-center text-xl font-semibold ml-6 truncate">
        <h3 className="truncate">{title}</h3>
      </div>

      <div className="flex py-2 px-8 items-center ">
        <LanguageSwitcherFlags />
      </div>

      <div className="flex py-2 px-8 items-center ">
        <TextSizeController />
      </div>

      <div className="flex py-2 px-8 items-center ">
        <ThemeSwitcher />
      </div>

    </div>
  );
}
