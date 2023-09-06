
import { numberFormats } from "./i18n/number-formats"
import { datetimeFormats } from "./i18n/datetime-formats"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "et",
//   pluralRules: {
   
//   },
  numberFormats,
  datetimeFormats,
}))
