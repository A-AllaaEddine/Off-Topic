import './home.styles.scss';
import { useNavigate } from 'react-router-dom';

import OffTopic from '../../assets/Off-Topic.png';
import Button from '../../components/button/button.component';

const Home = () => {

    const navigate = useNavigate();

    const goToAddPlayer = () => {
        navigate('/navigate/addplayer');
    }
    return (
        <div className='home-container'>
            <div className='image-container'>
                <img src={OffTopic} alt='off-topic' />
            </div>
            <div className='start-button-container'>
                <Button  onClick={goToAddPlayer}>START</Button>
            </div>
        </div>
    )
}

export default Home;