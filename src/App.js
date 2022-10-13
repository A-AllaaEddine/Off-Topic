import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import PlayersAdd from './routes/players-add/players-add.component';
import TopicSelect from './routes/topic-select/topic-select.component';
import Play from './routes/play/play.component';

import { Route, Routes } from 'react-router-dom';

import './App.scss';

const  App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/navigate" element={<Navigation />}>
          <Route path='addplayer' element={<PlayersAdd />} />
          <Route path='topic' element={<TopicSelect />} />
        </Route>
        <Route path='/play' element={<Play />} />
      </Routes>
    </div>
  )
}

export default App;
