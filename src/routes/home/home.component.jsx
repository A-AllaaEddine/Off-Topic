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
            <div className='credit-container'>
                <span>&#169; 2022 <a href='https://github.com/A-AllaaEddine'>Lazy Dev</a>, All rights reserved.</span><br/>
                <a href="https://www.buymeacoffee.com/A.AllaaEddine"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="140" /></a>
            </div>
        </div>
    )
}

export default Home;