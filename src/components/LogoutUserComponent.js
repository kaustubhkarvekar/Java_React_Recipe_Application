import React from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import RecipeService from '../services/RecipeService';



const LogoutUserComponent = () => {

    
    const navigate = useNavigate();

    const userLogout = () =>{
      RecipeService.getAllRecipes().then((response) => {
      const test = []
        if(sessionStorage.getItem('userSess') !== test || sessionStorage.getItem('userSess') !== ''){
          sessionStorage.setItem('userSess','')
          sessionStorage.clear();
          navigate('/');
        }else{
          navigate('/login');
        }
      window.location.reload();
  }).catch(error => {
      console.log(error)
  })
}
    

  return (
    <>
      {
        userLogout()
      }
    </>
  )
}

export default LogoutUserComponent