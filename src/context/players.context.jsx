import { useState, createContext } from "react";



const addPlayerToArray = (playersArray, playerToAdd) => {
    return [...playersArray, {...playerToAdd}];
}

const removePlayerFromArray = (playersArray, playerToRemove) => {
    return playersArray.filter(player => player.id !== playerToRemove.id);
}

export const PlayersContext = createContext({
    playersArray: [],
    setPlayersArray: () => {},
    isAddPlayerWindowOpen: false,
    setIsAddPlayerWindowOpen: () => {}
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

    const value = {playersArray, isAddPlayerWindowOpen, setIsAddPlayerWindowOpen, addPlayer, removePlayer};

    return (
        <PlayersContext.Provider value={value}>
            {children}
        </PlayersContext.Provider>
    )
}