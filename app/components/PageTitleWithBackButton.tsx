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
    <div className="flex w-full justify-around border-b-0 border-zinc-300  bg-[#326599] dark:bg-blue-900  ">



      {currentPage == 'home' ?

        <ActionButton to={`/${lang}/home`} className="inline-flex items-center py-2 px-4 ">
          <img src="../images/logo2.png" alt="Logo" className=" h-full py-0" />
        </ActionButton>




        : <>


          <ActionButton to={`/${lang}/home`} className="inline-flex items-center py-2 px-4 md:px-8">
            <IoMdHome className="w-6 md:w-8 h-6 md:h-8 text-white" />
          </ActionButton>

          <ActionButton
            onClick={() => navigate(-1)}
            className="inline-flex items-center py-2 px-4 md:px-8">
            <IoArrowBackCircleOutline className="w-6 md:w-8 h-6 md:h-8 text-white" />
          </ActionButton>

        </>}

      <div className="flex flex-grow items-center text-white text-xl font-semibold  truncate">

      </div>

      <div className="flex py-2 px-4 md:px-8 items-center ">
        <LanguageSwitcherFlags />
      </div>

      <div className="flex py-2 px-4 md:px-8 items-center ">
        <TextSizeController />
      </div>

      <div className="flex py-2 px-4 md:px-8 items-center ">
        <ThemeSwitcher />
      </div>

    </div>
  );
}
