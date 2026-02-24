import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RootHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const lang = navigator.language?.startsWith("el") ? "el" : "en";
    navigate(`/${lang}/home`, { replace: true });
  }, []);

  return null;
}