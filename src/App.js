import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import PlayerAdd from './routes/player-add/player-add.component';

import { Route, Routes } from 'react-router-dom';

import './App.scss';

const  App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/navigate" element={<Navigation />}>
          <Route path='addplayer' element={<PlayerAdd />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
