import "./players-add.styles.scss";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlayersContext } from "../../context/players.context";
import { DropDownContext } from "../../context/language.context";

import Player from "../../components/player/player.commonent";
import Button from "../../components/button/button.component";
import AddPlayerWindow from "../../components/add-player/add-player.component";

import { BUTTON_TYPES_CLASSES } from "../../components/button/button.component";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const AddPlayers = () => {
  const navigate = useNavigate();
  const {
    playersArray,
    isAddPlayerWindowOpen,
    setIsAddPlayerWindowOpen,
    selectRandomImposter,
  } = useContext(PlayersContext);
  const { displayText } = useContext(DropDownContext);

  const { add4players, nextButton, pleaseAdMoreplayers, maxPlayersReached } =
    displayText;
  const { addMorePlayers } = pleaseAdMoreplayers(4 - playersArray.length);

  const goToSelectTopic = () => {
    if (playersArray.length < 4) {
      alert(addMorePlayers);
      return;
    }

    navigate("/navigate/topic");
    selectRandomImposter();
  };

  const toogleAddPlayerWindows = () => {
    if (playersArray.length >= 10) {
      alert({ maxPlayersReached });
      return;
    }
    setIsAddPlayerWindowOpen(!isAddPlayerWindowOpen);
  };

  return (
    <div className="add-players-container">
      <div className="lobby-container">
        <h1 className="lobby-text">LOBBY</h1>
        <Button
          buttonType={BUTTON_TYPES_CLASSES.icon}
          onClick={toogleAddPlayerWindows}
        >
          <PersonAddAltIcon />
        </Button>
      </div>
      <h3>{add4players}</h3>
      <div className="players-container">
        {playersArray.map((player) => {
          return <Player key={player.id} player={player} />;
        })}
      </div>
      <div className="player-next-container">
        <Button onClick={goToSelectTopic}>{nextButton}</Button>
        {/* <Button
          buttonType={BUTTON_TYPES_CLASSES.icon}
          onClick={toogleAddPlayerWindows}
        >
          <PersonAddAltIcon />
        </Button> */}
      </div>
      {isAddPlayerWindowOpen && <AddPlayerWindow />}
    </div>
  );
};

export default AddPlayers;
