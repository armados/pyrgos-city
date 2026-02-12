import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  // 1. Logic to determine the language:
  // You can check a cookie, a database setting, 
  // or the "Accept-Language" header from the browser.
  const acceptLanguage = request.headers.get("Accept-Language");
  const defaultLang = acceptLanguage?.startsWith("el") ? "el" : "en";

  // 2. Redirect the user to the localized home page
  // Example: "/" becomes "/en/home"
  return redirect(`/${defaultLang}/home`);
}

// This component never actually renders because the loader redirects first,
// but we export a default component to satisfy React Router's requirements.
export default function RootRedirect() {
  return null;
}