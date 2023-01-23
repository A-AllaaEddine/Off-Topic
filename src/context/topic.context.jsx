import { createContext, useState } from "react";

import TopicsLite from "../utils/topics-lite.json";

const getRandomTopic = (topicType) => {
  const { topics } = topicType;
  const topicId = Math.floor(Math.random() * topics.length);
  return topics[topicId];
};

export const TopicsContext = createContext({
  topicsTypes: [],
  topicType: null,
  setTopicType: () => {},
  setTopicTypeInContext: () => {},
  topic: null,
  setTopic: () => {},
  setTopicsLanguage: () => {},
  setTopics: () => {},
  topicsList: {},
  setTopicsList: () => {},
  selectRandomTopicType: () => {},
});

export const TopicsProvider = ({ children }) => {
  const [topicsList, setTopicsList] = useState(TopicsLite);
  const [topicsTypes, setTopicsTypes] = useState(
    TopicsLite.find((topic) => {
      return topic.id === "en";
    })
  );
  const [topicType, setTopicType] = useState(null);
  const [topic, setTopic] = useState(null);

  const setTopicTypeInContext = (TopicType) => {
    setTopicType(TopicType);
  };

  const selectRandomTopicType = () => {
    const randomId = Math.floor(Math.random() * topicsTypes.content.length);
    const randomTopicType = topicsTypes.content[randomId];
    setTopicType(randomTopicType);
    const selectedTopic = getRandomTopic(randomTopicType);
    setTopic(selectedTopic);
  };

  const selectRandomTopic = (topicType) => {
    const selectedTopic = getRandomTopic(topicType);
    setTopic(selectedTopic);
  };

  const setTopics = (topics) => {
    setTopicsList(topics);
    setTopicsTypes(
      topics.find((topic) => {
        return topic.id === "en";
      })
    );
  };

  const setTopicsLanguage = (lang) => {
    setTopicsTypes(
      topicsList.find((topic) => {
        return topic.id === lang.id;
      })
    );
  };

  const value = {
    topicsTypes,
    topicType,
    setTopicTypeInContext,
    topic,
    selectRandomTopic,
    setTopicsLanguage,
    setTopics,
    selectRandomTopicType,
  };

  return (
    <TopicsContext.Provider value={value}>{children}</TopicsContext.Provider>
  );
};
