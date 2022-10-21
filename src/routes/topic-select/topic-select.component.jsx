import './topic-select.styles.scss';

import Topic from '../../components/topic/topic.component';


import { useContext } from 'react';
import { TopicsContext } from '../../context/topic.context';
import { LanguageContext } from '../../context/language.context';


const TopicSelect = () => {
    const { topicsTypes } = useContext(TopicsContext);
    const { displayText } = useContext(LanguageContext);

    const { selectTopic } = displayText;

    return (
        <div className='select-topic-container'>
            <h3>{selectTopic}</h3>
            <div className='topics-container'>
                {topicsTypes.map((topicType) => {
                return (
                        <Topic key={topicType.id} topicType={topicType} />
                    )
                })}
            </div>
        </div>
    )
}

export default TopicSelect;