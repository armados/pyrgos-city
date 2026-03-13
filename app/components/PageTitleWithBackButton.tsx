import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

import { IoMdHome } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import ActionButton from "./ActionButton";
import LanguageSwitcherFlags from "~/components/LanguageSwitcherFlags";

import { useNavigate } from "react-router";
import TextSizeController from "./TextSizeController";
import ThemeSwitcher from "./ThemeSwitcher";


export default function PageTitleWithBackButton({ title }: { title: string }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-around border-b border-gray-300 dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700 divide-solid">

      <ActionButton
        onClick={() => navigate(-1)}
        className="flex items-center">
        <span className="text-4xl px-8 py-4">&larr;</span>
      </ActionButton>

      <div className="flex flex-grow items-center text-2xl font-semibold ml-6 truncate">
        <h3 className="truncate">{title}</h3>
      </div>

      <div className="flex p-4 items-center ">
        <ThemeSwitcher />
      </div>

      <div className="flex p-4 items-center ">
       
        <TextSizeController />
     
      </div>

      <div className="flex p-4 items-center ">
    
        <LanguageSwitcherFlags />
      </div>

    </div>
  );
}
