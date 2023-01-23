import "./topic-select.styles.scss";

import Topic from "../../components/topic/topic.component";

import { useContext } from "react";
import { TopicsContext } from "../../context/topic.context";
import { DropDownContext } from "../../context/language.context";

import { useNavigate } from "react-router-dom";

const TopicSelect = () => {
  const { topicsTypes, selectRandomTopicType } = useContext(TopicsContext);
  const { displayText } = useContext(DropDownContext);
  // console.log(topicsTypes);

  const { selectTopic, selectRandomTopicText } = displayText;
  const navigate = useNavigate();

  const goToStart = () => {
    selectRandomTopicType();
    navigate("/navigate/play");
  };

  return (
    <div className="select-topic-container">
      <h3>{selectTopic}</h3>
      {/* {navigator.onLine && ( */}
      <p className="select-random-topic" onClick={goToStart}>
        {selectRandomTopicText}
      </p>
      {/* )} */}
      <div className="topics-container">
        {topicsTypes &&
          topicsTypes.content.map((topicType) => {
            return <Topic key={topicType.id} topicType={topicType} />;
          })}
      </div>
    </div>
  );
};

export default TopicSelect;
