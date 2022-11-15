import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import ReactGA from 'react-ga';
import { useContext } from 'react';
import { addCollectionAndDocuments } from './utils/firebase/firebase.utils';
import { TopicsContext } from './context/topic.context';
// import TopicsFull from './utils/topics-full.json';
import { getTopicsAndDocuments } from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import AddPlayers from './routes/players-add/players-add.component';
import TopicSelect from './routes/topic-select/topic-select.component';
import Play from './routes/play/play.component';
import Questions from './routes/questions/questions.component';
import Vote from './routes/vote/vote.component';
import Results from './routes/results/results.component';
import FeedbackStatus from './routes/feedback-success/feedback-success.component';

// const Home  = lazy(() => import('./routes/home/home.component')) ;
// const Navigation  = lazy(() => import('./routes/navigation/navigation.component')) ;
// const AddPlayers  = lazy(() => import('./routes/players-add/players-add.component')) ;
// const TopicSelect  = lazy(() => import('./routes/topic-select/topic-select.component')) ;
// const Play  = lazy(() => import('./routes/play/play.component')) ;
// const Questions  = lazy(() => import('./routes/questions/questions.component')) ;
// const Vote  = lazy(() => import('./routes/vote/vote.component')) ;
// const Results  = lazy(() => import('./routes/results/results.component')) ;



const  App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTopics } = useContext(TopicsContext);

  const setGA = () => {
    ReactGA.initialize('G-1WMTYK07M8');
    ReactGA.pageview('Init page view');
  };

    useEffect(() => {
        setGA();
        if ((location.pathname === "/navigate/addPlayer") || (location.pathname === "/navigate/topic") || (location.pathname === "/navigate/play") || (location.pathname === "/navigate/questions") || (location.pathname === "/navigate/vote") || (location.pathname === "/navigate/resutls")) {
            navigate("/");
        };


        const getTopics = async () => {
          try {
            const topics = await getTopicsAndDocuments();
            setTopics(topics);
          } catch(error) {
            console.log(error);
          }
        }

        if(navigator.onLine) {
          getTopics();
        }

        // addCollectionAndDocuments("topics", TopicsFull);

    }, []);

  return (
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:feedbackStatus' element={<FeedbackStatus />} />
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
