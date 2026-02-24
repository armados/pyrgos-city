import type { Route } from "../../+types/root";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router";

import LazyImage from "~/components/LazyImage";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Test page 1" },
    { name: "description", content: "Welcome to Test page 1" },
  ];
}

export default function TestPage1() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const photos = [
    'file1.jpg',
    'file2.jpg',
    'file3.jpg'
  ];

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

        <button 
            onClick={() => navigate(-1)} 
            className="self-start px-4 py-2 text-sm font-medium text-blue-600 hover:underline"
          >
            &larr; {t("common.back", "Back")}
          </button>
          
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            {t("testpage1.title")}
          </div>
        </header>

        <div className="grid grid-cols-2 gap-4">

          {photos.map((photo) => (
            <div className="w-full h-auto rounded-lg object-cover">
              <LazyImage
                key={photo}
                src={new URL(`./${photo}`, import.meta.url).href}

              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}



