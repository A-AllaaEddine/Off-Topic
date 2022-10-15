import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import AddPlayers from './routes/players-add/players-add.component';
import TopicSelect from './routes/topic-select/topic-select.component';
import Play from './routes/play/play.component';
import Questions from './routes/questions/questions.component';
import Vote from './routes/vote/vote.component';
import Results from './routes/results/results.component';

import { Route, Routes } from 'react-router-dom';

import './App.scss';

const  App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/navigate" element={<Navigation />}>
          <Route path='addplayer' element={<AddPlayers />} />
          <Route path='topic' element={<TopicSelect />} />
          <Route path='play' element={<Play />} />
          <Route path='questions' element={<Questions />} />
          <Route path='vote' element={<Vote />} />
          <Route path='resutls' element={<Results />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
