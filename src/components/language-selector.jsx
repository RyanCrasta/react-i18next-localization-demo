import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", langugae: "English" },
  { code: "fr", langugae: "French" },
  { code: "hi", langugae: "Hindi" },
  { code: "ar", langugae: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.langugae}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
