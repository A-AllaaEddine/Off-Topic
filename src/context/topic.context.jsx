import { createContext, useState } from "react";

import { TopicsTypes } from "../utils/topic.data";


const getRandomTopic = ( topicType ) => {
    const { topics } = topicType;
    const topicId =  Math.floor(Math.random() * topics.length);
    return topics[topicId];
}

export const TopicsContext = createContext({
    topicsTypes: [],
    topicType: null,
    setTopicType: () => {},
    setTopicTypeInContext: () => {},
    topic: null,
    setTopic: () => {}
})

export const TopicsProvider = ({ children }) => {
    const [topicsTypes, setTopicsTypes] = useState(TopicsTypes);
    const [topicType, setTopicType] = useState(null);
    const [topic, setTopic] = useState(null);


    const setTopicTypeInContext = (TopicType) => {
        setTopicType(TopicType);
        
    }

    const selectRandomTopic = (topicType) => {
        const selectedTopic = getRandomTopic(topicType);
        setTopic(selectedTopic);
    }


    const value = { topicsTypes, topicType, setTopicTypeInContext, topic, selectRandomTopic };

    return (
        <TopicsContext.Provider value={value}>
            {children}
        </TopicsContext.Provider>
    )
}