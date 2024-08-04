import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/language-selector";

function App() {
  const { t } = useTranslation();

  const description = t("description", {
    authorName: "Ryan Crasta",
  });

  console.log("description", description);

  return (
    <div className="container">
      <LanguageSelector />

      <h1>{t("greeting")}</h1>
      <p>{description.line1}</p>
      {/* <p>{description.line2}</p> */}

      <span>
        <Trans
          i18nKey={description.line2}
          components={{
            1: <b />,
          }}
        />
      </span>
    </div>
  );
}

export default App;
