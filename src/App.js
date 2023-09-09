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
import PremiumContent from "./pages/dashboard-content/premiumContent";
import Chatcontent from "./pages/dashboard-content/Chatcontent";
import ChallengeContent from "./pages/dashboard-content/ChallengeContent";
import ProfileContent from "./pages/dashboard-content/ProfileContent";
import ConnectBank from "./pages/dashboard-content/ConnectBank";
import SettingContent from "./pages/dashboard-content/SettingContent";
import Livestream from "./pages/dashboard-content/Livestream";
import ChallengePage from "./pages/dashboard-content/ChallengePage";
import AddCoins from "./pages/dashboard-content/AddCoins";
import SendGift from "./pages/dashboard-content/Gift";

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
            path="/dashboard/setting"
            element={<Dashboard contentComponent={SettingContent} />}
          />
          <Route
            path="/dashboard/profile"
            element={<Dashboard contentComponent={ProfileContent} />}
          />
          <Route
            path="/dashboard/premium"
            element={<Dashboard contentComponent={PremiumContent} />}
          />
          <Route
            path="/dashboard/bank"
            element={<Dashboard contentComponent={ConnectBank} />}

          />
          <Route
            path="/livestream"
            element={<Livestream />}
          />
          <Route
            path="/dashboard/friends"
            element={<Dashboard contentComponent={FriendContent} />}
          />
          <Route
            path="/dashboard/challenges"
            // element={<Dashboard contentComponent={PremiumContent} />}
            element={<Dashboard contentComponent={ChallengeContent} />}
          />
          <Route
            path="/dashboard/chat"
            element={<Dashboard contentComponent={Chatcontent} />}
          />
          <Route
            path="/challenge"
            element={<ChallengePage />}
          />
          <Route
            path="/coins"
            element={<AddCoins />}
          />
          <Route
            path="/gift"
            element={<SendGift />}
          />
          <Route path="/authentication" element={<Signup />} />
          <Route path="/dashboard/card" element={<Streamcard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
