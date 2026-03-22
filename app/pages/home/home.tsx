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
    { title: "Η Πόλη μου", image: "/images/plakes-01-300x225.jpg" },
    { title: "Σημεία Ενδιαφέροντος", image: "/images/plakes-01-300x225.jpg" },
    { title: "Αξιοθέατα", image: "/images/plakes-01-300x225.jpg" },
    { title: "Αγορές", image: "/images/plakes-01-300x225.jpg" },
    { title: "Παραλίες", image: "/images/plakes-01-300x225.jpg" },
    { title: "Φαγητό", image: "/images/plakes-01-300x225.jpg" },
    { title: "Τοπικά Προϊόντα", image: "/images/plakes-01-300x225.jpg" },
    { title: "Μεταφορές", image: "/images/plakes-01-300x225.jpg" },
    { title: "Χρήσιμα Τηλέφωνα", image: "/images/plakes-01-300x225.jpg" },

  ];

  return (
    <KioskPage
      title={t("home.title")}
      className="w-full pb-10 mb-8"
    >

 

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 mt-8">
  
  {/* FIRST COLUMN (1/3 Width) */}
  <div className="md:col-span-4 bg-white rounded-2xl shadow-md p-6 md:p-8">

<div className="max-w-md  bg-white/50 ">
  <h1 className="text-4xl font-extrabold text-blue-900  mb-4">
    Your Adventure <br/> 
    <span className="text-cyan-600 italic">Starts Here!</span>
  </h1>

  <p className="text-lg text-slate-700 leading-relaxed mb-8">
    Welcome to Katakolo! To help you make the most of your visit, we’ve gathered everything you need in one place. 
  </p>

  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700"><span className="font-bold text-blue-800">Explore</span> our landmarks and local history.</p>
    </li>
    
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700"><span className="font-bold text-blue-800">Relax</span> at the best nearby beaches.</p>
    </li>

    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700"><span className="font-bold text-blue-800">Taste</span> fresh seafood and traditional products.</p>
    </li>

    <li className="flex items-start gap-3">
      <div className="mt-1 bg-blue-100 p-1 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="5 13l4 4L19 7"></path></svg>
      </div>
      <p className="text-slate-700"><span className="font-bold text-blue-800">Navigate</span> with ease using transport and contact info.</p>
    </li>
  </ul>

  <div className="mt-10 pt-6 border-t border-slate-200">
    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
      Tap a category to begin 
      <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="arrow-right"></path></svg>
    </p>
  </div>
</div>






  </div>

  {/* SECOND COLUMN (2/3 Width) */}
  <div className="md:col-span-8 ">
 
 


   {/* GRID */}
      <div className="max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-3  gap-6">
        {categories.map((item, index) => (
          <ActionButton
            key={index}
            onClick={() => speakText(item.title, i18n.language)}
            className="
        group relative flex flex-col overflow-hidden rounded-xl bg-white
        h-[140px] md:h-[200px] 
       
        shadow
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
            <div className="absolute bottom-0 w-full bg-[#326599] py-3 px-4">
              <h2 className="text-white text-base md:text-lg font-bold truncate leading-tight">
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