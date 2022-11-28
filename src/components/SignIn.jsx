import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {signIn} = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await signIn(email, password)
            navigate('/account')
        }catch(e){
            setError(e.message)
            console.log(error);
        }
    }
  return (
    <div>
         <div>Sign in your account</div>
        <p>If you havent account
            <Link to='/signup'>Sign up</Link>
        </p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email address</label>
                <input onChange={(e)=> setEmail(e.target.value)} type='email'/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e)=> setPassword(e.target.value)} type='password'/>
            </div>
            <button>Sign in</button>
        </form>
    </div>
  )
}
export default SignIn