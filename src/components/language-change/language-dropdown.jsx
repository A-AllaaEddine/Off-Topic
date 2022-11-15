import './language-dropdown.scss';

import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';
import { TopicsContext } from '../../context/topic.context';

const LanguageDropDown = () => {
    const { languages, isLanguageDropDownOpen, setIsLanguageDropDownOpen, setLanguageText } = useContext(LanguageContext);
    const { setTopicsLanguage } = useContext(TopicsContext);

    const selectlanguage = (lang) => {
        setIsLanguageDropDownOpen(!isLanguageDropDownOpen);
        setLanguageText(lang);
        setTopicsLanguage(lang);
    }

    return (
        <div className='dropwdonw-container'>
            <div className='language-select-container'>
                {
                    languages.map((lang) => {
                        return (
                            <div key={lang.id} className='language-name' onClick={() => selectlanguage(lang)}>
                                {lang.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LanguageDropDown;