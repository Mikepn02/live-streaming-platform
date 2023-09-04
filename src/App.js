import './App.css';
import Signup from './components/signup/Signup';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard-menu/dashboard';
import Streamcard from './components/cards/Streamcard';
import { useEffect, useState } from 'react';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticationTimeout = setTimeout(() => {
      alert("Do you want to login later!")
      setIsAuthenticated(true)
    }, 2000)

    return () => window.clearTimeout(authenticationTimeout)
  }, [])
  const handleLogout = () => {
    setIsAuthenticated(false)
  }
  return (
    <div className="App">
    <Router>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/authentication' element={<Signup/>}/>
       <Route path='/dashboard/card' element={<Streamcard/>}/>
     </Routes>
    </Router>
</div>
  );
}

export default App;
