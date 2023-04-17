import './App.css';
import About from './Components/About';
import Profile from './Components/Profile';
import Home from './Home';
import { Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
      <Routes>
      <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
      <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
