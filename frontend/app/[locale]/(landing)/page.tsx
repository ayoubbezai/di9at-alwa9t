import Home from "./Home";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default function Page() {
  return <Home />;
}
