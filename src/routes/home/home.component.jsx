import './home.styles.scss';
import { useNavigate } from 'react-router-dom';

import OffTopic from '../../assets/off-topic-2.PNG';
import Button from '../../components/button/button.component';

const Home = () => {

    const navigate = useNavigate();

    const goToTopicSelect = () => {
        navigate('/navigate/addPlayer');
    }
    return (
        <div className='home-container'>
            <div className='image-container'>
                <img src={OffTopic} alt='off-topic' />
            </div>
            <div className='start-button-container'>
                <Button  onClick={goToTopicSelect}>START</Button>
            </div>
        </div>
    )
}

export default Home;