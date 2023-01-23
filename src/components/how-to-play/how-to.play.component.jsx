import "./how-to-play.styles.scss";

import { useContext } from "react";
import { DropDownContext } from "../../context/language.context";

const HowToPlayWindow = () => {
  const { isHowToPlayOpen, setIsHowToPlayOpen } = useContext(DropDownContext);

  const toggleFeedbackForm = () => {
    setIsHowToPlayOpen(!isHowToPlayOpen);
  };

  return (
    <div className="how-to-play-container">
      <div
        className="how-to-play-background"
        onClick={toggleFeedbackForm}
      ></div>
      <div className="content-container">
        <h1>How To Play</h1>
      </div>
    </div>
  );
};

export default HowToPlayWindow;
