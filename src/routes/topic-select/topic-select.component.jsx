import './topic-select.styles.scss';

import Topic from '../../components/topic/topic.component';

import {Topics} from '../../utils/topic.data';

import { useContext } from 'react';
import { TopicsContext } from '../../context/topic.context';


const TopicSelect = () => {
    const { topicsTypes } = useContext(TopicsContext);
    return (
        <div className='select-topic-container'>
            <h3>Select a topic from below</h3>
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