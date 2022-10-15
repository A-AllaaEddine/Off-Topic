import { useState, createContext, useContext } from "react";
import { TopicsContext } from "./topic.context";



const addPlayerToArray = (playersArray, playerToAdd) => {
    return [...playersArray, {...playerToAdd, isImposter: false}];
}

const removePlayerFromArray = (playersArray, playerToRemove) => {
    return playersArray.filter(player => player.id !== playerToRemove.id);
}

const setIsImposter = (playersArray) => {
    const imposterId = Math.floor(Math.random() * playersArray.length);

    return playersArray.map((player, key) => key === imposterId ? 
    {...player, isImposter: true

    } : 
    {... player, isImposter: false}
    );
}

const getTwoRandomPlayer = (playersArray, previousPlayers) => {

    let prevPlayer1;
    let prevPlayer2;
    if (!previousPlayers) {
        prevPlayer1 = null;
        prevPlayer2 = null;
    } else {
        prevPlayer1 = previousPlayers[0];
        prevPlayer2 = previousPlayers[1];
    }
    
    let player1 = Math.floor(Math.random() * playersArray.length);
    let player2 = Math.floor(Math.random() * playersArray.length);

    while((player1 === player2) || (player1 === prevPlayer1) || (player2 === prevPlayer2)) {
        player2 = Math.floor(Math.random() * playersArray.length);
    }

    return [playersArray[player1], playersArray[player2]];
}

const getVoteArray = (playersArray, votedPlayer, votingPlayer) => {

    if (votedPlayer.isImposter) {
        return playersArray.map((player) => player.id === votingPlayer.id ?
        { ...player, points: player.points + 1}
        :
        player
        )
    }

    return playersArray;
     
}

const getTopicVoteArray = (playersArray, topic, imposter, votedTopic) => {
        if (votedTopic === topic) {
            return playersArray.map((player) => player.id === imposter.id ?
            { ...player, points: player.points + 1}
            :
            player
            )
        }

        return playersArray;

}

const getImposter = (playersArray) => {
    for (let i = 0; i < playersArray.length; i++) {
        if (playersArray[i].isImposter === true) {
            return playersArray[i];
        }
    }
    return null;
}


export const PlayersContext = createContext({
    playersArray: [],
    setPlayersArray: () => {},
    addPlayer: () => {},
    removePlayer: () => {},
    isAddPlayerWindowOpen: false,
    isImposterVoting: false,
    selectIsImposterVoting: () => {},
    setIsImposter: () => {},
    twoRandomPlayers: [],
    selectTwoRandomPlayers: () => {},
    setVotePlayersArray: () => {},
    imposter: {},
    selectImposter: () => {},
    setVoteTopicPlayersArray: () => {}
})




export const PlayersPorvider = ({ children }) => {
    const [playersArray, setPlayersArray] = useState([]);
    const [isAddPlayerWindowOpen, setIsAddPlayerWindowOpen] = useState(false);
    const [twoRandomPlayers, setTwoRandomPlayers] = useState([]);
    const [imposter, setImposter] = useState({});
    const [isImposterVoting, setIsImposterVoting] = useState(false);

    const { topic } = useContext(TopicsContext);


     


    const selectIsImposterVoting = (bool) => {
        setIsImposterVoting(bool);
    }

    const addPlayer = (playerToAdd) => {
        const newPlayersArray = addPlayerToArray(playersArray, playerToAdd);
        setPlayersArray(newPlayersArray);
    }
    
    const removePlayer = (playerToRemove) => {
        const newPlayersArray = removePlayerFromArray(playersArray, playerToRemove);
        setPlayersArray(newPlayersArray);
    }

    const selectRandomImposter = () => {
        const newPlayersArray = setIsImposter(playersArray);
        setPlayersArray(newPlayersArray);
    }

    const selectTwoRandomPlayers = (previousPlayers) => {
        const twoPlayers = getTwoRandomPlayer(playersArray, previousPlayers);
        setTwoRandomPlayers(twoPlayers);
    }

    const setVotePlayersArray = (votedPlayer, votingPlayer) => {
        const voteArray = getVoteArray(playersArray, votedPlayer, votingPlayer);
            setPlayersArray(voteArray);
    }

    const setVoteTopicPlayersArray = (votedTopic) => {
        const voteArray = getTopicVoteArray(playersArray, topic, imposter, votedTopic);
        setPlayersArray(voteArray);
    }

    const selectImposter = () => {
        const imposTer = getImposter(playersArray);
        setImposter(imposTer);
    }
    

    const value = {
        playersArray,
        isAddPlayerWindowOpen,
        setIsAddPlayerWindowOpen,
        addPlayer,
        removePlayer,
        selectRandomImposter,
        twoRandomPlayers,
        selectTwoRandomPlayers,
        setVotePlayersArray,
        selectImposter,
        imposter,
        isImposterVoting,
        selectIsImposterVoting,
        setVoteTopicPlayersArray
    };

    return (
        <PlayersContext.Provider value={value}>
            {children}
        </PlayersContext.Provider>
    )
}