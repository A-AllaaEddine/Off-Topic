import './feedback-success.styles.scss';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FeedbackStatus = () => {
    const navigate = useNavigate();
    const { feedbackStatus } = useParams();

    useEffect(() => {
        const redirect_Page = () => {
            let tID = setTimeout(() => {
                navigate("/")
                window.clearTimeout(tID);		// clear time out.
            }, 2000);
        };

        redirect_Page();
    }, [])

    return (
        <div className='feedback-status-container'>
            {
                feedbackStatus === "success" ? (
                    <h1>feedback sent, thanks!</h1>
                    ) : (
                    <h1>error sending feedback !</h1>
                )
            }
        </div>
    )
}

export default FeedbackStatus;