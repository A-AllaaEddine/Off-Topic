import './player.styles.scss';


import { useContext } from 'react';
import { PlayersContext } from '../../context/players.context';

import Button from '../button/button.component';
import { BUTTON_TYPES_CLASSES } from '../button/button.component';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Player = ({ player, vote }) => {
    const { removePlayer } = useContext(PlayersContext);
    const { name, points } = player;

    const removePlayerHandler = () => {
        removePlayer(player);
    }
    return (
        <div className='player-info-container' >
            {
                !vote ? (
                    <>
                        <div className='remove-player-img'>
                            <Button buttonType={BUTTON_TYPES_CLASSES.icon} onClick={removePlayerHandler} ><RemoveCircleIcon/></Button>
                        </div>
                        <div className='player-info'>
                            <h2 className='player-name'>{name}</h2>
                            <h2 className='player-points'>{points}</h2>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`${vote ? 'vote' : ''} player-info`}>
                            <h2 className='player-name'>{name}</h2>
                        </div>
                    </>
                )
            }
            
        </div>
    )
}

export default Player;