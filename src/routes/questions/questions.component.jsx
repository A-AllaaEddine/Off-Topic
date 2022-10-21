import './questions.styles.scss';


import Button from '../../components/button/button.component';

import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { PlayersContext } from '../../context/players.context';
import { LanguageContext } from '../../context/language.context';


let i = 0;

const Questions = () => {

    const { selectTwoRandomPlayers, twoRandomPlayers } = useContext(PlayersContext);
    const [ questionStart, setQuestionStart ] = useState(true);
    const [ moreQuestions, setMoreQuestions ] = useState(false);
    const navigate = useNavigate();
    const player1 = twoRandomPlayers[0];
    const player2 = twoRandomPlayers[1];

    const { displayText } = useContext(LanguageContext);

    const { 
        nextButton,
        voteButton,
        questionTime,
        everyPlayerWillAsk,
        pressNextForFirstQuestion,
        player1AsksPlayer2,
        beCarefull,
        pressNext,
        ifYouHaveMoreQuestions,
        pressVote
    } = displayText;

    const { playersAsk } = player1AsksPlayer2(player1 && player1.name, player2 && player2.name);

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
                        <h2>{questionTime}</h2>
                        <div className='question-time-text'>
                            <span>{everyPlayerWillAsk}</span><br/>
                            <span>{pressNextForFirstQuestion}</span>
                        </div>
                        <div className='question-time-button'>
                            <Button onClick={startQuestionsHandler}>{nextButton}</Button>
                        </div>
                    </div>
                    :
                    (<div className='player-question-container'>
                        <h2>{questionTime}</h2>
                        <div className='player-question-text'>
                            <span>{playersAsk}</span><br/>
                            <span>{beCarefull}</span><br/>
                            <span>{pressNext}</span><br/>
                        </div>
                        <div className='player-question-button'>
                            <Button onClick={nextQuestionHnadler}>{nextButton}</Button>
                        </div>
                    </div>)
                ) : (
                    <div className='more-questions-container'>
                        <div className='more-questions-text'>
                            <span>{ifYouHaveMoreQuestions}</span><br/>
                            <span>{pressVote}</span>
                        </div>
                        <div className='vote-button'>
                            <Button onClick={goToVote}>{voteButton}</Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Questions;