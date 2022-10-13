import { useState, createContext } from "react";


const givePlayerId = (playersArray) => {
    return playersArray.map((player, key) => ({
        id: key,
        ...player
    }))
}

const addPlayerToArray = (playersArray, playerToAdd) => {
    return [...playersArray, {...playerToAdd, isImposter: false}];
}

const removePlayerFromArray = (playersArray, playerToRemove) => {
    return playersArray.filter(player => player.id !== playerToRemove.id);
}

const setImposter = (playersArray) => {
    const imposterId = Math.floor(Math.random() * playersArray.length);

    return playersArray.map((player, key) => key === imposterId ? 
    {...player, isImposter: true

    } : 
    {... player, isImposter: false}
    );
}



export const PlayersContext = createContext({
    playersArray: [],
    setPlayersArray: () => {},
    addPlayer: () => {},
    removePlayer: () => {},
    isAddPlayerWindowOpen: false,
    setIsImposter: () => {}
})




export const PlayersPorvider = ({ children }) => {
    const [playersArray, setPlayersArray] = useState([]);
    const [isAddPlayerWindowOpen, setIsAddPlayerWindowOpen] = useState(false);




    const addPlayer = (playerToAdd) => {
        const newPlayersArray = addPlayerToArray(playersArray, playerToAdd);
        setPlayersArray(newPlayersArray);
    }
    
    const removePlayer = (playerToRemove) => {
        const newPlayersArray = removePlayerFromArray(playersArray, playerToRemove);
        setPlayersArray(newPlayersArray);
    }

    const setIsImposter = () => {
        setImposter(playersArray);
    }

    const value = {
        playersArray, 
        isAddPlayerWindowOpen, 
        setIsAddPlayerWindowOpen, 
        addPlayer, 
        removePlayer,
        setIsImposter
    };

    return (
        <PlayersContext.Provider value={value}>
            {children}
        </PlayersContext.Provider>
    )
}