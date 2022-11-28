import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AccountPage = () => {
  const navigate = useNavigate()
  const {user, logout} = UserAuth()
  const handleLogout = async()=>{
    try{
      await logout();
      navigate('/');
      console.log('You are logged out')
    }catch (e){
      console.log(e.message);
    }
  }

  return (
    <div>
        <h1>Account:</h1>
        <p>User Email: {user && user.email}</p>

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
export default AccountPage