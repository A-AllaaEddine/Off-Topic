import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import AddPlayers from './routes/players-add/players-add.component';
import TopicSelect from './routes/topic-select/topic-select.component';
import Play from './routes/play/play.component';
import Questions from './routes/questions/questions.component';
import Vote from './routes/vote/vote.component';
import Results from './routes/results/results.component';
import AdSense from 'react-adsense';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './App.scss';

const  App = () => {
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
        if ((location.pathname == "/navigate/addPlayer") || (location.pathname == "/navigate/topic") || (location.pathname == "/navigate/play") || (location.pathname == "/navigate/questions") || (location.pathname == "/navigate/vote") || (location.pathname == "/navigate/resutls")) {
            navigate("/");
        }
    }, []);

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
      {/* <GoogleAds />  */}
      <AdSense.Google client='ca-pub-6491978736747955' slot='8205009337' style={{ display: 'block' }} />
    </div>
  )
}

export default App;
