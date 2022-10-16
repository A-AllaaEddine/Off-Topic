import './questions.styles.scss';


import Button from '../../components/button/button.component';

import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { PlayersContext } from '../../context/players.context';


let i = 0;

const Questions = () => {

    const { selectTwoRandomPlayers, twoRandomPlayers } = useContext(PlayersContext);
    const [ questionStart, setQuestionStart ] = useState(true);
    const [ moreQuestions, setMoreQuestions ] = useState(false);
    const navigate = useNavigate();
    const player1 = twoRandomPlayers[0];
    const player2 = twoRandomPlayers[1];

    useEffect(() => {
        return () => i = 0;
    }, [])

    const nextQuestionHnadler = () => {
        i = i + 1;
        if (i < 6) {
            selectTwoRandomPlayers(twoRandomPlayers);
        } else {
            setMoreQuestions(true);
            
        }
    }

    const startQuestionsHandler = () => {
        setQuestionStart(false);
        selectTwoRandomPlayers(twoRandomPlayers);
    }
    
    const goToVote = () => {
        navigate('/navigate/vote');
    }

    return (
        <div className='questions-container'>
            {
                !moreQuestions ?

                (
                    questionStart ?
                    <div className='question-time-container'>
                        <h2>Questions Time</h2>
                        <div className='question-time-text'>
                            <span>Every player will get to ask another player a question about the topic</span>
                            <span>Pres NEXT for first question</span>
                        </div>
                        <div className='question-time-button'>
                            <Button onClick={startQuestionsHandler}>NEXT</Button>
                        </div>
                    </div>
                    :
                    (<div className='player-question-container'>
                        <h2>Questions Time</h2>
                        <div className='player-question-text'>
                            <span><b>{player1.name}</b>,you can ask <b>{player2.name}</b> a question about the topic.</span><br/>
                            <span>CAREFULLY pick your question, so the imposter won't find what the topic is.</span><br/>
                            <span>Press next</span><br/>
                        </div>
                        <div className='player-question-button'>
                            <Button onClick={nextQuestionHnadler}>NEXT</Button>
                        </div>
                    </div>)
                ) : (
                    <div className='more-questions-container'>
                        <div className='more-questions-text'>
                            <span>If you have more questions, it's the time to ask them</span><br/>
                            <span>Otherwise press VOTE to vote for the imposter</span>
                        </div>
                        <div className='vote-button'>
                            <Button onClick={goToVote}>VOTE</Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Questions;