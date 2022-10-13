import './topic-select.styles.scss';

import Topic from '../../components/topic/topic.component';

import {Topics} from '../../utils/topic.data';


const TopicSelect = () => {
    return (
        <div className='select-topic-container'>
            <h3>Select a topic from below</h3>
            <div className='topics-container'>
                {Topics.map((topic) => {
                return (
                        <Topic key={topic.id} topic={topic} />
                    )
                })}
            </div>
        </div>
    )
}

export default TopicSelect;