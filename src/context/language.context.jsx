import { useState, createContext } from "react";

import { Languages, DisplayText } from "../utils/language";

export const DropDownContext = createContext({
  isLanguageDropDownOpen: false,
  setIsLanguageDropDownOpen: () => {},
  toggleIsDropDownOpen: () => {},
  languages: Languages,
  selectedLanguage: Languages["en"],
  setSelectedLanguage: () => {},
  displayText: DisplayText("en"),
  setDisplayText: () => {},
});

export const DropDownProvider = ({ children }) => {
  const [isLanguageDropDownOpen, setIsLanguageDropDownOpen] = useState(false);
  const [isHelpDropDownOpen, setIsHelpDropDownOpen] = useState(false);
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [languages, setLanguages] = useState(Languages);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages["en"]);
  const [displayText, setDisplayText] = useState(DisplayText("en"));

  const setLanguageText = (lang) => {
    setSelectedLanguage(lang);
    setDisplayText(DisplayText(lang.id));
  };

  const value = {
    isLanguageDropDownOpen,
    setIsLanguageDropDownOpen,
    isHelpDropDownOpen,
    setIsHelpDropDownOpen,
    isFeedbackOpen,
    setIsFeedbackOpen,
    setIsHowToPlayOpen,
    isHowToPlayOpen,
    languages,
    setLanguageText,
    displayText,
  };

  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
