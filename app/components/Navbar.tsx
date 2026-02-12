import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t">
      <div className="flex justify-around h-14 items-center">
        <Link to={`/${lang}/home`} className="nav-link">
          {t("nav.home")}
        </Link>

        <Link to={`/${lang}/testpage1`} className="nav-link">
          {t("nav.testpage1")}
        </Link>

      </div>
    </nav>
  );
}
