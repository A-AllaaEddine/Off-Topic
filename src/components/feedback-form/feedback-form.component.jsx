import './feedback-form.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/language.context';

import { submitFeedback } from '../../utils/firebase/firebase.utils';
import { useState, useRef  } from 'react';

import emailjs from '@emailjs/browser';

import CloseIcon from '@mui/icons-material/Close';


const defaultFeedbackFields = {
    user_name: '',
    user_email: '',
    message: '',
    date: ''
}

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState(defaultFeedbackFields);
    const { isFeedbackOpen, setIsFeedbackOpen, displayText } = useContext(LanguageContext);
    const { YourName, YourEmail, Feedback, sendButton } = displayText;
    const navigate = useNavigate();

    const { user_name, user_email, message } = feedback;

    const form = useRef();

    const toggleFeedbackForm = () => {
        setIsFeedbackOpen(!isFeedbackOpen);
       
    }

    

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFeedback({ ...feedback, [name]: value })
        // console.log(feedback);
    }

    const sendEmail = (event) => {
        event.preventDefault();

        try {
            if(navigator.onLine) {
            emailjs.sendForm('service_87yrh6s', 'template_k9ylsv4', form.current, 'WcxmqDheMlYXahi13')
            .then((result) => {
                setFeedback(defaultFeedbackFields); 
                setIsFeedbackOpen(!isFeedbackOpen);
                navigate("/success");
            }, (error) => {
                navigate("/failed");
                console.log(error);
            });
        }} catch(error) {
            console.log(error);
        }

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
            <form ref={form} name='feedback'  className='feedback-form' onSubmit={sendEmail}>
                <div className='close-icon' onClick={toggleFeedbackForm}><CloseIcon /></div>
                <div className='content-form'>
                    <h1>{Feedback}</h1>
                    <div className='name-inputBox'>
                        <label >{YourName}</label>
                        <input type='text' name='user_name' value={user_name} required onChange={handleChange}/>
                    </div>
                    <div className='name-inputBox'>
                        <label >{YourEmail}</label>
                        <input type='text' name='user_email' value={user_email} required onChange={handleChange}/>
                    </div>
                    <div className='feedback-inputBox'>
                        <label >{Feedback}:</label>
                        <textarea type='text' name='message' value={message} className='feedback-text' required onChange={handleChange}/>
                    </div>
                    <button type='submit' >{sendButton}</button>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm;