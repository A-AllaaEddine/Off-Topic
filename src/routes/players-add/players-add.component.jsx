import './players-add.styles.scss';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PlayersContext } from '../../context/players.context';

import AddPlayersIcon from '../../assets/AddPlayers.png';

import Player from '../../components/player/player.commonent';
import Button from '../../components/button/button.component';
import AddPlayerWindow from '../../components/add-player/add-player.component';

const Players = [
    {
        id: 1,
        name: 'robin',
        points: 0
    },
    {
        id: 2,
        name: 'hood',
        points: 0
    },
    {
        id: 3,
        name: 'Abedlouadoud',
        points: 0
    },{
        id: 4,
        name: 'Abedlouadoud',
        points: 0
    },{
        id: 5,
        name: 'Abedlouadoud',
        points: 0
    },{
        id: 6,
        name: 'Abedlouadoud',
        points: 0
    },
];



const PlayersAdd = () => {
    const navigate = useNavigate();
    const { playersArray, isAddPlayerWindowOpen, setIsAddPlayerWindowOpen } = useContext(PlayersContext);


    const goToSelectTopic = () => {
        console.log(playersArray.length);
        if (playersArray.length < 3) {
            alert(`Please add ${3-playersArray.length} more players to start the game`);
            return;
        }
        navigate('/navigate/topic');
    }

    const toogleAddPlayerWindows = () => setIsAddPlayerWindowOpen(!isAddPlayerWindowOpen);

    return (
        <div className='add-players-container'>
            <h3>Add 3 Players at least then press next</h3>
            <div className='players-container'>
                {playersArray.map((player) => {
                return (
                        <Player key={player.id} player={player} />
                    )
                })}
            </div>
            <div className='player-next-container'>
                <Button onClick={goToSelectTopic}>NEXT</Button>
                <img src={AddPlayersIcon} alt='add player' onClick={toogleAddPlayerWindows}/>
            </div>
            {
                isAddPlayerWindowOpen && <AddPlayerWindow />
            }
        </div>
    )
}

export default PlayersAdd;