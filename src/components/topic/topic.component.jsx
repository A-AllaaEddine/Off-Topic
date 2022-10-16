import './topic.styles.scss';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { TopicsContext } from '../../context/topic.context';

const Topic = ({ topicType }) => {
    const navigate = useNavigate();
    const { setTopicTypeInContext, selectRandomTopic } = useContext(TopicsContext);
    const { name, imageUrl } = topicType;
    console.log(name);

    const goToStart = () => {
        navigate('/navigate/play');
        setTopicTypeInContext(topicType);
        selectRandomTopic(topicType);
    }
    return (
        <div className='topic-info-container'>
            <img src={imageUrl} alt='topic' onClick={goToStart}/>
            <div className='topic-info'>
                <span className='topic-name'>{name}</span>
            </div>
        </div>
    )
}

export default Topic;