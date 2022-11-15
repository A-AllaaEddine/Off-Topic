import './play.styles.scss';

import Button from '../../components/button/button.component';
import PlayerInfo from '../../components/player-info/player-info.component';

import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../context/language.context';
import { PlayersContext } from '../../context/players.context';



let i = 0;

const Play = () => {
    const { playersArray } = useContext(PlayersContext);
    const [ player, setPlayer ] = useState(playersArray[0]);
    const [ nextPlayer, setNextPlayer ] = useState(false);
    const navigate = useNavigate();
    console.log(playersArray);

    // Setting Language
    const { displayText } = useContext(LanguageContext);
    const { giveThePhoneToPlayer, pressNextToCheck, dontLetAnyoneSee, nextButton } = displayText;
    const { giveThePhoneTo } = giveThePhoneToPlayer(player && player.name);

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
                    <h2>{player && player.name}</h2>
                    <div className='player-showcase-text'>
                        <span>{giveThePhoneTo}</span><br/>
                        <span>{pressNextToCheck}</span><br/>
                        <span>{dontLetAnyoneSee}</span>
                    </div>
                    <div className='player-showcase-button'>
                        <Button onClick={goToImposterHandler}>{nextButton}</Button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Play;