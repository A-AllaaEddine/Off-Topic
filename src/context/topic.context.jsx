import { createContext, useState } from "react";

import { Topics } from "../utils/topic.data";

export const TopicsContext = createContext({
    topics: Topics,
    topic: null
})

export const TopicsProvider = ({ children }) => {
    const [topics, setTopics] = useState(Topics);
    const [topic, setTopic] = useState(Topics);

    const value = { topics, topic, setTopic };

    return (
        <TopicsContext.Provider value={value}>
            {children}
        </TopicsContext.Provider>
    )
}