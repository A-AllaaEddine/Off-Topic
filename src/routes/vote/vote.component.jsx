import './vote.styles.scss';

import { useContext, useState, useEffect } from 'react';
import { PlayersContext } from '../../context/players.context';
import { TopicsContext } from '../../context/topic.context';
import { LanguageContext } from '../../context/language.context';
import { useNavigate } from 'react-router-dom';

import Player from '../../components/player/player.commonent';


let i = 0;

const Vote = () => {
    const {
        playersArray,
        setVotePlayersArray,
        imposter,
        selectImposter,
        isImposterVoting,
        selectIsImposterVoting,
        setVoteTopicPlayersArray } = useContext(PlayersContext);
    const { topicType } = useContext(TopicsContext);
    const [ votingPlayer, setVotingPlayer ] = useState(playersArray[0]);
    const [ newPlayersArray, setNewPlayersArray ] = useState(playersArray.filter(Player => Player.id !== votingPlayer.id));
    const navigate = useNavigate();

    const { displayText } = useContext(LanguageContext);

    const { voteForPlayer, whichOneIsTopic } = displayText;

    useEffect(() => {
        return () => i = 0;
    }, [])

    let topics;
    if (topicType) {
        topics = topicType.topics;
    } else {
        topics  = [];
    }

    
    const playerVoteHandler = (votedPlayer) => {
        setVotePlayersArray(votedPlayer, votingPlayer);
        i = i + 1;
        if (i < playersArray.length) {
            setNewPlayersArray(playersArray.filter(Player => Player.id !== playersArray[i].id));
            setVotingPlayer(playersArray[i]);
        } else {
            selectImposter();
            selectIsImposterVoting(true);
            navigate('/navigate/resutls');
        }
    }

    const imposterVoteHandler = (votedTopic) => {
        setVoteTopicPlayersArray(votedTopic);
        selectIsImposterVoting(false);
        navigate('/navigate/resutls');
    }

    

    return (
        <div className='vote-container'>
            {
                !isImposterVoting ? 
            (<div className='players-vote-container'>
                <h2>{ votingPlayer && votingPlayer.name}</h2>
                <span>{voteForPlayer}</span>
                <div className='voting-players-container'>
                    {newPlayersArray &&
                    newPlayersArray.map((votedPlayer) => {
                        return (
                            <div key={votedPlayer.id} onClick={() => playerVoteHandler(votedPlayer)}>
                                <Player key={votedPlayer.id} player={votedPlayer} vote />
                            </div>
                            )
                        })
                    }
                </div>
            </div>) : (
            <div className='imposter-vote-container'>
                <h2>{imposter && imposter.name}</h2>
                <span>{whichOneIsTopic}</span>
                <div className='voting-topics-container'>
                    {topics &&
                        topics.map((topic) => {
                            return (
                                <div key={topic.id} onClick={() => imposterVoteHandler(topic)} className='voting-topics'>
                                    <h2 onClick={() => imposterVoteHandler(topic)}>{topic.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            )
            }
        </div>
    )
}
export default Vote;