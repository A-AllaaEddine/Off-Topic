import './play.styles.scss';

import Button from '../../components/button/button.component';
import PlayerInfo from '../../components/player-info/player-info.component';

import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { PlayersContext } from '../../context/players.context';


let i = 0;

const Play = () => {
    const { playersArray } = useContext(PlayersContext);
    const [ player, setPlayer ] = useState(playersArray[0]);
    const [ nextPlayer, setNextPlayer ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        return () => i = 0;
    }, [])

    const imposterHnadler = () => {
        i = i + 1;
        if (i < playersArray.length) {
            setPlayer(playersArray[i]);
            setNextPlayer(false);
        } else {
            navigate('/navigate/questions');
        }
    }
    
    const goToImposterHandler = () => {
        setNextPlayer(true);
    }

    return (
        <div className='imposter-info-container'>
            {
                nextPlayer ?
                <PlayerInfo player={player} imposterHnadler={imposterHnadler}/>
                :
                (<div className='player-showcase-container'>
                    <h2>{player.name}</h2>
                    <div className='player-showcase-text'>
                        <span>Give the phone to {player.name}</span><br/>
                        <span>Press next to check if you are in or off topic.</span><br/>
                        <span>Don't let anyone else see the screen.</span>
                    </div>
                    <div className='player-showcase-button'>
                        <Button onClick={goToImposterHandler}>NEXT</Button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Play;