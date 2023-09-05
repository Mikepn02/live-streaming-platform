import "./App.css";
import Signup from "./components/signup/Signup";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard-menu/dashboard";
import Streamcard from "./components/cards/Streamcard";
import { useEffect, useState } from "react";
import Content from "./pages/dashboard-content/content";
import Streamcontent from "./pages/dashboard-content/streamcontent";
import Streamerscontent from "./pages/dashboard-content/Streamerscontent";
import FriendContent from "./pages/dashboard-content/FriendContent";
import ChallengeContent from "./pages/dashboard-content/ChallengeContent";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticationTimeout = setTimeout(() => {
      // alert("Do you want to login later!")
      setIsAuthenticated(true);
    }, 2000);

    return () => window.clearTimeout(authenticationTimeout);
  }, []);
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<Dashboard contentComponent={Content} />}
          />
          <Route
            path="/dashboard/stream"
            element={<Dashboard contentComponent={Streamcontent} />}
          />
          <Route
            path="/dashboard/hhh"
            element={<Dashboard contentComponent={Streamerscontent} />}
          />
          <Route
            path="/dashboard/friends"
            element={<Dashboard contentComponent={FriendContent} />}
          />
          <Route
            path="/dashboard/challenges"
            element={<Dashboard contentComponent={ChallengeContent} />}
          />
          <Route path="/authentication" element={<Signup />} />
          <Route path="/dashboard/card" element={<Streamcard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
