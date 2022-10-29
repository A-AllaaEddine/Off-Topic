import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import './App.scss';


const Home  = lazy(() => import('./routes/home/home.component')) ;
const Navigation  = lazy(() => import('./routes/navigation/navigation.component')) ;
const AddPlayers  = lazy(() => import('./routes/players-add/players-add.component')) ;
const TopicSelect  = lazy(() => import('./routes/topic-select/topic-select.component')) ;
const Play  = lazy(() => import('./routes/play/play.component')) ;
const Questions  = lazy(() => import('./routes/questions/questions.component')) ;
const Vote  = lazy(() => import('./routes/vote/vote.component')) ;
const Results  = lazy(() => import('./routes/results/results.component')) ;



const  App = () => {
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
        if ((location.pathname === "/navigate/addPlayer") || (location.pathname === "/navigate/topic") || (location.pathname === "/navigate/play") || (location.pathname === "/navigate/questions") || (location.pathname === "/navigate/vote") || (location.pathname === "/navigate/resutls")) {
            navigate("/");
        }
    }, []);

  return (
    <Suspense>
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
    </Suspense>
  )
}

export default App;
