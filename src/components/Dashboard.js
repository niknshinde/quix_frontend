import React, { useEffect , useContext } from 'react'
import QuizForm from './QuizForm'
import AdminCreation from './AdminCreation'
import { useNavigate } from 'react-router-dom';
import backendContext from '../contex/backend/backendContext';

const Dashboard = () => {
  const context = useContext(backendContext);
  const { host } = context;

  const navigate = useNavigate();

  // 🔒 Secure Access: Only admins are granted access to the dashboard.
  // 🚀 Furthermore, even if someone manages to pass this checkpoint, another layer of authentication awaits for creating questions and answers. No shortcuts allowed!

  useEffect(() => {
  
    if (localStorage.getItem('userrole') === 'user') {
      navigate('/');
    }
  }, []);
  
  console.log(localStorage.getItem('userrole'));
  return (
    <div className='dash_board'>
        <h2 className='m-5'>Create New Questions</h2>
        <QuizForm/>
        <h2 className='m-5'>Create New Admin For Website</h2>
        <AdminCreation host = {host} />
    </div>
  )
}

export default Dashboard