import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import UserService from '../services/UserService'


const LoginUserComponent = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const navigate = useNavigate();

    
    const checkUser = (u) => {
        u.preventDefault();

        const user = {email, password}

        UserService.validateUser(user).then((response) => {
            const responseJson = response.data; 
            sessionStorage.setItem('userSess',JSON.stringify(responseJson));
            console.log(sessionStorage.getItem('userSess'));
            navigate('/');
            window.location.reload();
        }).catch(error => {
            alert("Authentication Failed!!!")
            console.log(error)
        })
    }

  return (
    <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Login</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>E-mail ID</label>
                                <input
                                    type="email" required
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
                                    type='password' required
                                    placeholder='Enter Password'
                                    name='userPassword'
                                    className='form-control'
                                    value={password}
                                    onChange={(u) => setPassword(u.target.value)}
                                    >
                                    </input>
                            </div>
                            <div>
                            <button className='btn btn-yellow' onClick={(u) => checkUser(u)}>Login</button> &nbsp; <Link to='/' className='btn btn-yellow'>Cancel</Link> &nbsp;<Link to='/signup' className='btn btn-yellow'>SignUp</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class='login-comp'>
            </div>
        </div>
  )
}

export default LoginUserComponent