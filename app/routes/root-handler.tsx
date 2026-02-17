import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  // Logic: Check browser language or default to 'en'
  const acceptLanguage = request.headers.get("Accept-Language");
  const defaultLang = acceptLanguage?.startsWith("el") ? "el" : "en";

  // Redirect to the localized home page
  return redirect(`/${defaultLang}/home`);
}

// React Router requires a default component even if it's never rendered
export default function RootHandler() {
  return null;
}