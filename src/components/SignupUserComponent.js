import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../services/UserService'

const SignupUserComponent = () => {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const navigate = useNavigate();

    const storeUser = (u) => {
        u.preventDefault();

        const user = {name, email, password}

        UserService.createUser(user).then((response) => {
            console.log(response);
            alert("Registered Successfully!")
            const responseJson = response.data; 
            sessionStorage.setItem('userSess',JSON.stringify(responseJson));
            navigate('/');
            window.location.reload();
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Sign-Up</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                    <label className='form-label'>Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Name'
                                        name='userName'
                                        className='form-control'
                                        value={name}
                                        onChange={(u) => setName(u.target.value)}
                                        >
                                        </input>
                                </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>E-mail ID</label>
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    name='emailId'
                                    className='form-control'
                                    value={email}
                                    onChange={(u) => setEmail(u.target.value)}
                                    >
                                    </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Password</label>
                                <input
                                    type='password'
                                    placeholder='Enter Password'
                                    name='userPassword'
                                    className='form-control'
                                    value={password}
                                    onChange={(u) => setPassword(u.target.value)}
                                    >
                                    </input>
                            </div>
                            <div>
                            <button className='btn btn-yellow' onClick={(u) => storeUser(u)}>Register</button> &nbsp; <Link to='/' className='btn btn-yellow'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class='login-comp'>
            </div>
        </div>
    </div>
  )
}

export default SignupUserComponent