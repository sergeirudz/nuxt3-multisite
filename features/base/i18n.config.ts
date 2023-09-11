import numberFormats  from "./i18n/number-formats"
import  dateTimeFormats from "./i18n/date-time-formats"


export default defineI18nConfig(() => ({
    legacy: false,
    // locale: 'et',
    // fallbackLocale: "et",
    numberFormats,
    dateTimeFormats,
  }))