import './player-info.styles.scss';

import Button from '../../components/button/button.component';

import { useContext } from 'react';
import { TopicsContext } from '../../context/topic.context';
import { LanguageContext } from '../../context/language.context';

const PlayerInfo = ({ player, imposterHnadler }) => {

    const { topicType, topic} = useContext(TopicsContext);
    const { displayText } = useContext(LanguageContext);

    const { 
        youAreOffTopic, 
        tryTofindTopic, 
        voteForWrongImposter, 
        giveHint, 
        nextButton,
        inTopic,
        yourGoalIs,
        pressNext
    }=  displayText;

    const { Hint } = giveHint(topicType.name.toUpperCase());
    const { youAreInTopic } = inTopic(topic.name);
    
    return (
        <div className='blas'>
            {
                player.isImposter ? 
                (<div className='imposter-showcase-container'>
                    <h2>{player.name}</h2>
                    <div className='imposter-showcase-text'>
                        <span>{youAreOffTopic}</span><br/>
                        <span>{tryTofindTopic}</span><br/>
                        <span>{voteForWrongImposter}</span><br/>
                        <span>{Hint}</span>
                    </div>
                    <div className='imposter-showcase-button'>
                        <Button onClick={imposterHnadler}>{nextButton}</Button>
                    </div>
                </div>) : (
                <div className='imposter-showcase-container'>
                    <h2>{player.name}</h2>
                    <div className='imposter-showcase-text'>
                        <span>{youAreInTopic}</span><br/>
                        <span>{yourGoalIs}</span><br/>
                        <span>{pressNext}</span>
                    </div>
                    <div className='imposter-showcase-button'>
                        <Button onClick={imposterHnadler}>{nextButton}</Button>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default PlayerInfo;