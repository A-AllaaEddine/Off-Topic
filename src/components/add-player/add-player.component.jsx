import "./add-player.styles.scss";

import Button from "../button/button.component";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useContext, useState } from "react";
import { PlayersContext } from "../../context/players.context";
import { DropDownContext } from "../../context/language.context";

const defaultFormFields = {
  playerName: "",
};

const AddPlayerWindow = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { playerName } = formFields;
  const { addPlayer, isAddPlayerWindowOpen, setIsAddPlayerWindowOpen } =
    useContext(PlayersContext);
  const { displayText } = useContext(DropDownContext);

  const { backButton, youCanAddMorePlayers } = displayText;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const addPlayerHandler = () => {
    if (!playerName) return;

    const playerObj = {
      id: 0,
      name: `${playerName}`,
      points: 0,
    };
    addPlayer(playerObj);

    setFormFields(defaultFormFields);
    setIsAddPlayerWindowOpen(!isAddPlayerWindowOpen);
  };

  const goBack = () => {
    setIsAddPlayerWindowOpen(!isAddPlayerWindowOpen);
  };

  return (
    <div className="add-player-container">
      <span>{youCanAddMorePlayers}</span>
      <form>
        <div className="input-container">
          <div>
            <Button
              buttonType={BUTTON_TYPES_CLASSES.icon}
              onClick={addPlayerHandler}
            >
              <AddCircleIcon />
            </Button>
          </div>
          <input
            label="Enter Player Name"
            type="text"
            required
            maxLength="13"
            onChange={handleChange}
            name="playerName"
            value={playerName}
          />
        </div>
        <div className="go-back-button-container">
          <Button onClick={goBack}>{backButton}</Button>
        </div>
      </form>
    </div>
  );
};

export default AddPlayerWindow;
