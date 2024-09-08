import About from './components/About';
import ExperiencePage from './components/ExperiencePage';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import RecommendPage from './components/RecommendPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
         <Route  path='about' element={<About/>}/>
         <Route path='experience' element={<ExperiencePage/>}/>
         <Route path='recommend' element={<RecommendPage/>}/>
      </Route>
    </Routes>
   
    
  );
}

export default App;
