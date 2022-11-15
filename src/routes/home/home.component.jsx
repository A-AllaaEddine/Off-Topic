import './home.styles.scss';
import { useNavigate } from 'react-router-dom';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import InfoIcon from '@mui/icons-material/Info';
import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';


import OffTopic from '../../assets/off-topic-2.PNG';
import Button from '../../components/button/button.component';
import LanguageDropDown from '../../components/language-change/language-dropdown';
import HelpDropDown from '../../components/help-dropdown/help-dropdown';
import FeedbackForm from '../../components/feedback-form/feedback-form.component';

const Home = () => {

    const { isLanguageDropDownOpen, setIsLanguageDropDownOpen, isHelpDropDownOpen, setIsHelpDropDownOpen, isFeedbackOpen, displayText } = useContext(LanguageContext);
    const navigate = useNavigate();

    const { startButton } = displayText;

    const goToTopicSelect = () => {
        navigate('/navigate/addPlayer');
    }

    const toggleLanguageDropDown = () => {
        setIsLanguageDropDownOpen(!isLanguageDropDownOpen);
        setIsHelpDropDownOpen(false);
    }
    
    const toggleHelpDropDown = () => {
        setIsHelpDropDownOpen(!isHelpDropDownOpen);
        setIsLanguageDropDownOpen(false);
    }

    

    return (
        <div className='home-container'>
            {isFeedbackOpen ? 
                <FeedbackForm /> :
                null
            }
            <div className='language-container'>
                <div className='suggestions-icon' onClick={toggleHelpDropDown}><InfoIcon /></div>
                {
                    isHelpDropDownOpen ?
                    <HelpDropDown /> : 
                    null
                }
                <div className='language-icon' onClick={toggleLanguageDropDown}><LanguageTwoToneIcon /></div>
                {
                    isLanguageDropDownOpen ?
                    <LanguageDropDown /> : 
                    null
                }
            </div>
            <div className='image-container'>
                <img src={OffTopic} alt='off-topic' />
            </div>
            <div className='start-button-container'>
                <Button  onClick={goToTopicSelect}>{startButton}</Button>
            </div>
            <div className='credit-container'>
                <span>&#169; 2022 <a href='https://github.com/A-AllaaEddine'>Lazy Dev</a>, All rights reserved.</span><br/>
                {/* <a href="https://www.buymeacoffee.com/A.AllaaEddine"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt='buymeacoffe' width="140" /></a> */}
            </div>
        </div>
    )
}

export default Home;