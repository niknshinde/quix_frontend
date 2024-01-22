import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizState } from './contex/quiz/QuizState';
import { useState } from 'react';
import Login from './components/auth/Login';
import SignUP from './components/auth/SignUP';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AlertSate from './contex/alerts/AlertSate';
import EasyLevel from './components/excercise/EasyLevel';
import MediumLevel from './components/excercise/MediumLevel';
import HardLevel from './components/excercise/HardLevel';
import { LeadersState } from './contex/leaders/LeadersState';
import LeaderBoard from './components/LeaderBoard';
import Dashboard from './components/Dashboard';
import { Alert } from 'react-bootstrap';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { BackendState } from './contex/backend/BackendState';



function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>
          <AlertSate>
            <BackendState>
            <QuizState>
            <LeadersState>


                <Router>
                <Navbar />
                {/* <Alert alert={alert}/> */}


                <Routes>
                <Route path="/login" element={<Login showAlert={showAlert} />} />
                <Route path="/signup" element={<SignUP showAlert={showAlert}/>} />
                <Route path="/" element={<Home showAlert={showAlert}/>} />
                <Route path="/easyLevel" element={<EasyLevel/>} />
                <Route path="/mediumLevel" element={<MediumLevel/>} />
                <Route path="/hardLevel" element={<HardLevel/>} />
                <Route path="/leaderBoard" element={<LeaderBoard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/profile" element={<Profile/>} />


                </Routes>

                </Router>
            </LeadersState>
            </QuizState>

            </BackendState>

            </AlertSate>


    <Footer/>
    </>
  );
}

export default App;
