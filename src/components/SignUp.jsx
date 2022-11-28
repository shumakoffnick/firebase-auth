import { UserAuth } from '../context/AuthContext'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser} = UserAuth()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password);
            navigate('/account')
        }catch(e){
            setError(e.message)
            console.log(error)
        }
    }

  return (
    <div>
        <div>Sign up your free account</div>
        <p>If you have account
            <Link to='/'>Sign in</Link>
        </p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email address</label>
                <input onChange={(e)=>setEmail(e.target.value)} type='email'/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type='password'/>
            </div>
            <button>Sign up</button>
        </form>
    </div>
  )
}
export default SignUp