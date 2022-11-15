import './help-dropdown.scss';

import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';

const HelpDropDown = () => {
    const {  isHelpDropDownOpen, setIsHelpDropDownOpen, isFeedbackOpen, setIsFeedbackOpen, displayText } = useContext(LanguageContext);
    const { FeedbackAndSuggestions } = displayText;

    const selectFeedBack = () => {
        setIsHelpDropDownOpen(!isHelpDropDownOpen);
        setIsFeedbackOpen(!isFeedbackOpen);
    }

    return (
        <div className='help-dropwdonw-container'>
            <div className='help-select-container'>
               <div className='feedback' onClick={selectFeedBack}>{FeedbackAndSuggestions}</div>
            </div>
        </div>
    )
}

export default HelpDropDown;