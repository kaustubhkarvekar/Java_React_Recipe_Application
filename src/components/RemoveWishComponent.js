// import React, {useState} from 'react'
// import {useParams, useNavigate} from 'react-router-dom'
// import WishlistService from '../services/WishlistService.js'





// const RemoveWishComponent = () => {

//     const [wish, setWish] = useState([])
//     const [allwishes , setAllWishes] = useState([])
//     const {id} = useParams();
//     const navigate = useNavigate();
//     let i = 0;
//     const dewish = () => {

//         const user = JSON.parse(sessionStorage.getItem('userSess'))
//         WishlistService.getAllWishes(user.id).then((response) =>{
//             setAllWishes(response.data);
//             console.log(response.data)
//         })
//         for (i; i < allwishes.length; i++) {
//             const element = allwishes[i];
//             if(element.userId == user.id && element.recipeId == id){
//                 setWish(element)
//                 break;
//             }
//         }

//         WishlistService.deleteWish(wish.id).then((response) => {
//             alert(response.data)
//             navigate("/wishlist");
//         })
//     }

//   return (
//     <div>
//         {
//             dewish()
//         }
//     </div>
//   )
// }

// export default RemoveWishComponent