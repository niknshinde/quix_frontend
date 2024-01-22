// UserProfile.js
import React, { useEffect, useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeLanguage from './ChangeLanguage';
import backendContext from '../contex/backend/backendContext';

const Profile = () => {
  const context = useContext(backendContext);
  const { host } = context;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const handleLogOut = () => {
    localStorage.removeItem('token2');
    navigate('/');
  };

  const getUserProfile = async () => {
    try {
      const response = await fetch(`${host}/api/user/getUserProfile`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('token2'),
        },
      });

      const profile = await response.json();

      console.log('User profile:', profile);
      setUser(profile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };



  useEffect(() => {
    getUserProfile();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile2 centering">
      <h2>Name : {user.name}</h2>
      <p>Email : {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Learning Language: {user.currentLanguage}</p>
      <div>
        <h3>Scores:</h3>
        {Object.entries(user.scores).map(([language, score]) => (
          <p key={language}>{language}: {score}</p>
        ))}
      </div>



     <ChangeLanguage />
       

      <h1>login out</h1>
      <button onClick={handleLogOut} className="nav-btn btn btn-primary">
              Log-Out
      </button>
    </div>
  );
};

export default Profile;
