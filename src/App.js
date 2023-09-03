import './App.css';
import Signup from './components/signup/Signup';
import Home from './pages/Home/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Dashboard from './pages/dashboard-menu/dashboard';
import Streamcard from './components/cards/Streamcard';

function App() {
  return (
    <div className="App">
         <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/authentication' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/card' element={<Streamcard/>}/>
          </Routes>
         </Router>
    </div>
  );
}

export default App;
