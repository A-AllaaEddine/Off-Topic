import './player-add.styles.scss';

import { useNavigate } from 'react-router-dom';

import Player from '../../components/player/player.commonent';
import Button from '../../components/button/button.component';

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



const PlayerAdd = () => {
    const navigate = useNavigate();
    const goToSelectTopic = () => {
        navigate('/navigate/topic');
    }
    return (
        <div className='add-player-container'>
            <h3>Add 3 Players at least then press next</h3>
            <div className='players-container'>
                {Players.map((player) => {
                return (
                        <Player key={player.id} player={player} />
                    )
                })}
            </div>
            <div className='player-next-container'>
                <Button onClick={goToSelectTopic}>NEXT</Button>
            </div>
        </div>
    )
}

export default PlayerAdd;