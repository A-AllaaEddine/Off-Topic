import { useState, createContext } from "react";

import { Languages, DisplayText } from "../utils/language";


export const LanguageContext = createContext({
    isDropDownOpen : false,
    setIsDropDownOpen: () => {},
    toggleIsDropDownOpen: () => {},
    languages: Languages,
    selectedLanguage: Languages[0],
    setSelectedLanguage: () => {},
    displayText: DisplayText(0),
    setDisplayText: () => {}
})


export const LanguageProvider = ({ children }) => {
    const [ isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [ languages, setLanguages ] = useState(Languages);
    const [ selectedLanguage, setSelectedLanguage ] = useState(Languages[0]);
    const [ displayText, setDisplayText ] = useState(DisplayText(0));
    


    const setLanguageText = (lang) => {
        setSelectedLanguage(lang);
        setDisplayText(DisplayText(lang.id));
    }
    

    const value = {
        isDropDownOpen,
        setIsDropDownOpen,
        languages,
        setLanguageText,
        displayText
    }


    return (
        <LanguageContext.Provider value={value}>
            { children }
        </LanguageContext.Provider>
    )
}