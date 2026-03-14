import type { Route } from "../../+types/root";
import { useTranslation } from "react-i18next";
import KioskPage from "~/components/KioskPage";
import LazyImage from "~/components/LazyImage";

export function meta({ }: Route.MetaArgs) {
  return [];
}

export default function TestPage2() {
  const { t } = useTranslation();

  const photos = [
  ];

  return (
    <KioskPage
      title={t("testpage2.title")}
            className="px-4 pt-16 pb-4"
    >

   page 2

    </KioskPage>
  );
}






