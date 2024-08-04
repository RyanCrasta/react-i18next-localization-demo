import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  debug: true,
  fallbackLng: "en",
  returnObjects: true,
  // resources: {
  //   en: {
  //     translation: {
  //       greeting: "Hello, Welcome!",
  //       description: {
  //         line1: "This is Internationalization Article",
  //         line2: "Author of this article is <1>{{authorName}}</1>",
  //       },
  //     },
  //   },
  //   fr: {
  //     translation: {
  //       greeting: "Bonjour bienvenue!",
  //       description: {
  //         line1: "Ceci est un article sur l'internationalisation",
  //         line2: "L'auteur de cet article est <1>{{authorName}}</1>",
  //       },
  //     },
  //   },
  //   hi: {
  //     translation: {
  //       greeting: "नमस्ते, स्वागत है!",
  //       description: {
  //         line1: "यह अंतर्राष्ट्रीयकरण अनुच्छेद है",
  //         line2: "इस लेख के लेखक हैं <1>{{authorName}}</1>",
  //       },
  //     },
  //   },
  //   ar: {
  //     translation: {
  //       greeting: "مرحبا أهلا وسهلا!",
  //       description: {
  //         line1: "هذه هي المادة التدويل",
  //         line2: "مؤلف هذا المقال هو <1>{{authorName}}</1>",
  //       },
  //     },
  //   },
  // },
});
