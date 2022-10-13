import './topic.styles.scss';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { TopicsContext } from '../../context/topic.context';

const Topic = ({ topic }) => {
    const navigate = useNavigate();
    const { setTopic } = useContext(TopicsContext);
    const { name } = topic;

    const goToStart = () => {
        navigate('/play');
        setTopic(name)
    }
    return (
        <div className='topic-info-container' key={topic.id}>
            <img alt='' onClick={goToStart}/>
            <div className='topic-info'>
                <span className='topic-name'>{name}</span>
            </div>
        </div>
    )
}

export default Topic;