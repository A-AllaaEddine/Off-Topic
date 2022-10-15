import './player.styles.scss';

import RemovePlayer from '../../assets/RemovePlayer.png';

import { useContext } from 'react';
import { PlayersContext } from '../../context/players.context';

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
                            <img src={RemovePlayer} alt='remove' onClick={removePlayerHandler} />
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