import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'

const HeaderComponent = () => {    

    const [login, setLogin] = useState([])

    useEffect(() => {
        const test = []
        if(sessionStorage.getItem('userSess') == test){
            setLogin(null)
            checkLogin()
        }else{
            setLogin(JSON.parse(sessionStorage.getItem('userSess')))
            checkLogin()
        }
    },[])
    
    


    const checkLogin = () =>{
        
        //console.log(login)
        
        if(login !== null){
            return (
                <div>
                   <header>
                    <nav className='navbar navbar-expand-lg navbar-dark'>
                        &nbsp;&nbsp;&nbsp; 
                            <div class="col text-start">
                            <a href='http://localhost:3000/' className='navbar-brand'>
                                <i class="material-icons">restaurant_menu</i> DelFoods
                                </a>
                            </div>
                            <div style={{width:"400px"}}>
                                <form action="" class="search-form">
                                    <div class="form-group has-feedback">
                                        <input type="text" class="form-control" name="search" id="search" placeholder="search" />
                                    </div>
                                </form>
                            </div>
                            <div class="col text-end">
                            <h5 className='text-light'><a href='/wishlist' class='wishlist'><i class="material-icons">favorite_border</i> Wishlist</a>  &nbsp;&nbsp;&nbsp; Hi! {login.name} <a href='/logout'><i class="fa fa-sign-out"> </i></a></h5>
                            </div>
                    </nav>
            </header>
                </div>
              )
        }else{
            return (
                <div>
                    <header>
                    <nav className='navbar navbar-expand-lg navbar-dark'>
                        &nbsp;&nbsp;&nbsp; 
                            <div class="col text-start">
                            <a href='http://localhost:3000/' className='navbar-brand'>
                                <i class="material-icons">restaurant_menu</i> DelFoods
                                </a>
                            </div>
                            <div style={{width:"400px"}}>
                                <form action="" class="search-form">
                                    <div class="form-group has-feedback">
                                        <input type="text" class="form-control" name="search" id="search" placeholder="search"/>
                                    </div>
                                </form>
                            </div>
                            <div class="col text-end">
                            <Link to='/login' className='btn btn-light'>Login</Link>
                            </div>
                    </nav>
                </header>
                </div>
              )
        }
    }

    //const [login, setLogin] = useState(checkLogin);

    return (
        <div>
            {
                checkLogin()
            }
        </div>
      )
}

export default HeaderComponent
