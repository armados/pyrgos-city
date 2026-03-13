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
    >

      <div className="grid grid-cols-2 gap-4">

        {photos.map((photo) => (
          <div className="w-full h-auto rounded-lg object-cover">
            <LazyImage
              key={photo}
              src={new URL(`./${photo}`, import.meta.url).href}
              allowToClickToShowInFullscreen={true}
            />
          </div>
        ))}
      </div>

    </KioskPage>
  );
}



