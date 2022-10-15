import './player-info.styles.scss';

import Button from '../../components/button/button.component';

import { useContext } from 'react';
import { TopicsContext } from '../../context/topic.context';

const PlayerInfo = ({ player, imposterHnadler }) => {

    const { topicType, topic} = useContext(TopicsContext);
    
    return (
        <div className='blas'>
            {
                player.isImposter ? 
                (<div className='imposter-showcase-container'>
                    <h2>{player.name}</h2>
                    <div className='imposter-showcase-text'>
                        <span>You are off the topic</span><br/>
                        <span>Try to find out what the topic is</span><br/>
                        <span>and make the others vote for the wrong IMPOSTER!</span><br/>
                        <span>HINT: the topic is about: {topicType.name.toUpperCase()} </span>
                    </div>
                    <div className='imposter-showcase-button'>
                        <Button onClick={imposterHnadler}>NEXT</Button>
                    </div>
                </div>) : (
                <div className='imposter-showcase-container'>
                    <h2>{player.name}</h2>
                    <div className='imposter-showcase-text'>
                        <span>You are in the topic, which is {topic.name}</span><br/>
                        <span>Your goal is to find the imposter who does not know the topic</span><br/>
                        <span>Press NEXT</span>
                    </div>
                    <div className='imposter-showcase-button'>
                        <Button onClick={imposterHnadler}>NEXT</Button>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default PlayerInfo;