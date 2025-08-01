import i18next from "i18next";
import Backend from "i18next-fs-backend";
import path from "path";

export async function initServerI18n(
  locale: string,
  ns: string[] = ["common"]
) {
  const instance = i18next.createInstance();

  await instance.use(Backend).init({
    lng: locale,
    fallbackLng: "ar",
    ns,
    defaultNS: "common",
    backend: {
      loadPath: path.resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return instance;
}
