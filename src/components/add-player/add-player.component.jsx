import './add-player.styles.scss';

import AddPlayerIcon from '../../assets/AddPlayer.png';
import Button from '../button/button.component';

import { useContext, useState } from 'react';
import { PlayersContext } from '../../context/players.context';


const defaultFormFields = {
    playerName:''
}

const AddPlayerWindow = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { playerName } = formFields;
    const { addPlayer, isAddPlayerWindowOpen, setIsAddPlayerWindowOpen } = useContext(PlayersContext);

    

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value })
    }
 
    const addPlayerHandler = () => {
        if (!playerName) return;

        const playerObj = {
            id: `${playerName}`,
            name: `${playerName}`,
            points: 0
        }
        addPlayer(playerObj);

        setFormFields(defaultFormFields);
        setIsAddPlayerWindowOpen(!isAddPlayerWindowOpen);
    }

    const goBack = () => {
        setIsAddPlayerWindowOpen(!isAddPlayerWindowOpen);
    }

    return (
        <div className='add-player-container'>
            <span>You can add more players or start the game</span>
            <form>
                <div className='input-container'>
                    <img src={AddPlayerIcon} alt='add player' onClick={addPlayerHandler}/>
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
                <div className="add-player-button-container">
                    <Button onClick={goBack}>BACK</Button>
                </div>
            </form>
        </div>
    )
}

export default AddPlayerWindow;