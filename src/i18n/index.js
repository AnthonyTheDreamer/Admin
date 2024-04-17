import { createI18n } from "vue-i18n";
import vi from "./vi.json";
import en from "./en.json";
import { getLocaleStorage } from "@/utils/localStorage/locale"

export default new createI18n({
  legacy: false,
  locale: getLocaleStorage(),
  fallbackLocale: "en",
  messages: { vi, en },
});
