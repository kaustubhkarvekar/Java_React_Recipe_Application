import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import WishlistService from '../services/WishlistService'

const AddToWishlistComponent = () => {

    const user = JSON.parse(sessionStorage.getItem('userSess'))
    const {id} = useParams();
    const navigate = useNavigate();
    let count = 0;
    
    const saveWish = () =>{
        if(user !== null && count == 0){
            const recipeId = id;
            const userId = user.id;
            const wish = {userId, recipeId}
            WishlistService.createWish(wish).then((response) => {
                console.log(response.data);
                navigate('/')
            })
            count = count + 1;
            alert("Added to Wishlist!")
        }else{
            WishlistService.getAllWishes(id).then((response) => {
                navigate('/login')
            })
            
        }
    }
    


  return (
    <div>
        {
            saveWish()
        }
    </div>
  )
}

export default AddToWishlistComponent