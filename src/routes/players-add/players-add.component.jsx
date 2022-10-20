import './players-add.styles.scss';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PlayersContext } from '../../context/players.context';


import Player from '../../components/player/player.commonent';
import Button from '../../components/button/button.component';
import AddPlayerWindow from '../../components/add-player/add-player.component';

import { BUTTON_TYPES_CLASSES } from '../../components/button/button.component';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';




const AddPlayers = () => {
    const navigate = useNavigate();
    const { playersArray, isAddPlayerWindowOpen, setIsAddPlayerWindowOpen, selectRandomImposter } = useContext(PlayersContext);


    const goToSelectTopic = () => {
        if (playersArray.length < 4) {
            alert(`Please add ${4-playersArray.length} more players to start the game`);
            return;
        }
        
        navigate('/navigate/topic');
        selectRandomImposter();
    }

    const toogleAddPlayerWindows = () => {
        if (playersArray.length >= 10) {
            alert("You have reached the maximum allowed players");
            return;
        }
        setIsAddPlayerWindowOpen(!isAddPlayerWindowOpen);
    }

    return (
        <div className='add-players-container'>
            <h3>Add 4 Players at least then press next</h3>
            <div className='players-container'>
                {playersArray.map((player) => {
                return (
                        <Player key={player.id} player={player} />
                    )
                })}
            </div>
            <div className='player-next-container'>
                <Button onClick={goToSelectTopic}>NEXT</Button>
                <Button buttonType={BUTTON_TYPES_CLASSES.icon} onClick={toogleAddPlayerWindows}><PersonAddAltIcon /></Button>
            </div>
            {
                isAddPlayerWindowOpen && <AddPlayerWindow />
            }
        </div>
    )
}

export default AddPlayers;