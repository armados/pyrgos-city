import type { Route } from "../../+types/root";
import { useTranslation } from "react-i18next";
import ActionButton from "~/components/ActionButton";
import KioskPage from "~/components/KioskPage";

export const speakText = (text: string, lang: string) => {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = lang;
  window.speechSynthesis.speak(msg);
};

export function meta({ }: Route.MetaArgs) {
  return [];
}

export default function Home() {
  const { t, i18n } = useTranslation();

  const categories = [
    { title: t("home.box1"), image: "/images/plakes-01-300x225.jpg" },
    { title: t("home.box2"), image: "/images/plakes-01-300x225.jpg" },
    { title: t("home.box3"), image: "/images/plakes-01-300x225.jpg" },
    { title: t("home.box4"), image: "/images/plakes-01-300x225.jpg" },
    { title: t("home.box5"), image: "/images/plakes-01-300x225.jpg" },
    { title: t("home.box6"), image: "/images/plakes-01-300x225.jpg" },

  ];

  return (
    <KioskPage
      title={t("home.title")}
      className="w-full pb-10 mb-8"
    >

 

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-8xl mx-auto px-4 mt-8">
  
  {/* FIRST COLUMN (1/3 Width) */}
  <div className="md:col-span-4 bg-white dark:bg-neutral-700 rounded-2xl shadow-md p-6 md:p-8">

<div className="max-w-md  ">
  <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-300 mb-4">
    {t("home.welcome_title_1")}<br/> 
    <span className="text-cyan-600 dark:text-cyan-400 italic">{t("home.welcome_subtitle_1")}</span>
  </h1>

  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
    {t("home.welcome_intro_1")} 
  </p>

  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700 dark:text-slate-300"><span className="font-bold text-blue-800 dark:text-blue-400">{t("home.bullet1")}</span> our landmarks and local history.</p>
    </li>
    
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700 dark:text-slate-300"><span className="font-bold text-blue-800 dark:text-blue-400">{t("home.bullet2")}</span> at the best nearby beaches.</p>
    </li>

    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700 dark:text-slate-300"><span className="font-bold text-blue-800 dark:text-blue-400">{t("home.bullet3")}</span> fresh seafood and traditional products.</p>
    </li>

    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700 dark:text-slate-300"><span className="font-bold text-blue-800 dark:text-blue-400">{t("home.bullet4")}</span> with ease using transport and contact info.</p>
    </li>
  </ul>

 
</div>






  </div>

  {/* SECOND COLUMN (2/3 Width) */}
  <div className="md:col-span-8 ">
 
 


   {/* GRID */}
      <div className="max-w-8xl mx-auto  grid grid-cols-2 md:grid-cols-3  gap-6">
        {categories.map((item, index) => (
          <ActionButton
            key={index}
            onClick={() => speakText(item.title, i18n.language)}
            className="
        group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-stone-700
        h-[180px] md:h-[260px] 
       
        shadow
        dark:shadow-gray-600
      "
          >
            {/* IMAGE CONTAINER */}
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover "
              />
              {/* Subtle overlay to keep focus on the image quality */}
              {false && <div className="absolute inset-0 bg-white/10" />}
            </div>

            {/* LABEL BOTTOM BAR */}
            <div className="absolute bottom-0 w-full bg-[#326599] dark:bg-blue-900 py-3 px-4">
              <h2 className="text-white dark:text-white text-base md:text-lg font-bold truncate leading-tight">
                {item.title}
              </h2>
            </div>

          </ActionButton>
        ))}
      </div>










  </div>

</div>


   


    </KioskPage>
  );
}