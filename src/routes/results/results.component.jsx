import "./results.styles.scss";

import { useContext } from "react";
import { PlayersContext } from "../../context/players.context";
import { DropDownContext } from "../../context/language.context";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";

const Results = () => {
  const { imposter, selectIsImposterVoting, isImposterVoting, playersArray } =
    useContext(PlayersContext);
  const navigate = useNavigate();

  const { displayText } = useContext(DropDownContext);

  const { nextButton, newGameButton, offTopicPlayerIs, results } = displayText;

  const goToTopicVote = () => {
    selectIsImposterVoting(true);
    navigate("/navigate/vote");
  };

  const goToSelectPlayers = () => {
    navigate("/navigate/addPlayer");
  };

  return (
    <div className="resutls-container">
      {isImposterVoting ? (
        <div className="imposter-results-container">
          <span>{offTopicPlayerIs}</span>
          <h1>{imposter.name}</h1>
          <div className="results-button">
            <Button onClick={goToTopicVote}>{nextButton}</Button>
          </div>
        </div>
      ) : (
        <div className="players-results-container">
          <h1>{results}</h1>
          <div className="players-resutls">
            {playersArray.map((player) => {
              return (
                <div key={player.id} className="players">
                  <h3>{player.name}</h3>
                  <h3>{player.points}</h3>
                </div>
              );
            })}
          </div>
          <div className="results-button">
            <Button onClick={goToSelectPlayers}>{newGameButton}</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
