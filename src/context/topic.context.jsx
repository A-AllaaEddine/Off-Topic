import { createContext, useState } from "react";

import { Topics } from "../utils/topic.data";

export const TopicsContext = createContext({
    topicsTypes: Topics,
    topicType: '',
    setTopicType: () => {},
    topic: '',
    setTopic: () => {}
})

export const TopicsProvider = ({ children }) => {
    const [topicsTypes, setTopicsTypes] = useState(Topics);
    const [topicType, setTopicType] = useState('');
    const [topic, setTopic] = useState('');

    const value = { topicsTypes, topicType, setTopicType };

    return (
        <TopicsContext.Provider value={value}>
            {children}
        </TopicsContext.Provider>
    )
}