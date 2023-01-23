import "./help-dropdown.scss";

import { useContext } from "react";
import { DropDownContext } from "../../context/language.context";

const HelpDropDown = () => {
  const {
    isHelpDropDownOpen,
    setIsHelpDropDownOpen,
    isHowToPlayOpen,
    setIsHowToPlayOpen,
    isFeedbackOpen,
    setIsFeedbackOpen,
    displayText,
  } = useContext(DropDownContext);
  const { FeedbackAndSuggestions } = displayText;

  const selectFeedBack = () => {
    setIsHelpDropDownOpen(!isHelpDropDownOpen);
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  const selectHowToPlay = () => {
    setIsHelpDropDownOpen(!isHelpDropDownOpen);
    setIsHowToPlayOpen(!isHowToPlayOpen);
  };

  return (
    <div className="help-dropwdonw-container">
      <div className="help-select-container">
        <div className="feedback" onClick={selectFeedBack}>
          {FeedbackAndSuggestions}
        </div>
        <div className="how-to" onClick={selectHowToPlay}>
          How to play.
        </div>
      </div>
    </div>
  );
};

export default HelpDropDown;
