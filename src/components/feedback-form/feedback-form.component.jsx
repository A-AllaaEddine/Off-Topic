import './feedback-form.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/language.context';

import { submitFeedback } from '../../utils/firebase/firebase.utils';
import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';


const defaultFeedbackFields = {
    name: '',
    message: '',
    date: ''
}

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState(defaultFeedbackFields);
    const { isFeedbackOpen, setIsFeedbackOpen, displayText } = useContext(LanguageContext);
    const { YourName, Feedback, sendButton } = displayText;
    const navigate = useNavigate();

    const { name, message } = feedback;

    const toggleFeedbackForm = () => {
        setIsFeedbackOpen(!isFeedbackOpen);
       
    }

    

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFeedback({ ...feedback, [name]: value })
        // console.log(feedback);
    }

    const submitForm = async (event) => {
        event.preventDefault();

        // console.log(feedback);
        if(navigator.onLine) {
            try {
                await submitFeedback("feedbacks", {...feedback, date: new Date()})
                .then(() => {
                    setFeedback(defaultFeedbackFields); 
                    setIsFeedbackOpen(!isFeedbackOpen);
                    navigate("/success");
                })
                .catch((error) => console.log("error sending feedback !", error));
            }catch(error) {
                navigate("/failed");
                console.log(error);
            }
        }
        
    }
    
    return (
        <div className='feedback-container' >
            <div className='feedback-background' onClick={toggleFeedbackForm}></div>
            <form name='feedback'  className='feedback-form'>
                <div className='close-icon' onClick={toggleFeedbackForm}><CloseIcon /></div>
                <div className='content-form'>
                    <h1>{Feedback}</h1>
                    <div className='name-inputBox'>
                        <label >{YourName}</label>
                        <input type='text' name='name' value={name} required onChange={handleChange}/>
                    </div>
                    <div className='feedback-inputBox'>
                        <label >{Feedback}:</label>
                        <textarea type='text' name='message' value={message} className='feedback-text' required onChange={handleChange}/>
                    </div>
                    <button type='submit' onClick={submitForm}>{sendButton}</button>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm;