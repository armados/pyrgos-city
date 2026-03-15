import type { Route } from "../../+types/root";
import { useTranslation } from "react-i18next";
import KioskPage from "~/components/KioskPage";
import LazyImage from "~/components/LazyImage";

export function meta({ }: Route.MetaArgs) {
  return [];
}

export default function TestPage1() {
  const { t } = useTranslation();

  const photos = [
    'file1.jpg',
    'file2.jpg',
    'file3.jpg'
  ];

  return (
    <KioskPage
      title={t("testpage1.title")}
      className="px-4 pt-16 pb-4"
    >

 


<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {photos.map((photo) => (
    <div
      key={photo}
      className="
        overflow-hidden
        rounded-xl
        shadow-md
        bg-blue-200
      "
    >
      <LazyImage
        src={new URL(`./${photo}`, import.meta.url).href}
                      allowToClickToShowInFullscreen={true}

      />
    </div>
  ))}
</div>

    </KioskPage>
  );
}



