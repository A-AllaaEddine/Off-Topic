import './topic.styles.scss';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { TopicsContext } from '../../context/topic.context';

const Topic = ({ topicType }) => {
    const navigate = useNavigate();
    const { setTopicTypeInContext, selectRandomTopic } = useContext(TopicsContext);
    const { name, imageUrl } = topicType;

    const goToStart = () => {
        navigate('/navigate/play');
        setTopicTypeInContext(topicType);
        selectRandomTopic(topicType);
    }
    return (
        <div className='topic-info-container'>
            <div className='topic-image-container'>
                <img src={imageUrl} alt='topic' onClick={goToStart}/>
            </div>
            <div className='topic-info'>
                <span className='topic-name'>{name}</span>
            </div>
        </div>
    )
}

export default Topic;