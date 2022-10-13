import './player.styles.scss';

import RemovePlayer from '../../assets/RemovePlayer.png';

const Player = ({ player }) => {
    const { name, points } = player;
    return (
        <div className='player-info-container' key={player.id}>
                    <div className='remove-player-img'>
                        <img src={RemovePlayer} alt='remove' />
                    </div>
                    <div className='player-info'>
                        <h2 className='player-name'>{name}</h2>
                        <h2 className='player-points'>{points}</h2>
                    </div>
                </div>
    )
}

export default Player;