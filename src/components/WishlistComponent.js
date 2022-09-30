import React, { useState,useEffect } from 'react'
import RecipeService from '../services/RecipeService'
import WishlistService from '../services/WishlistService'

const WishlistComponent = () => {

    const [recipes, setRecipes] = useState([])
    const [wishes, setWishes] = useState([])
    const [allwishes, setAllWishes] = useState([])
    const user = JSON.parse(sessionStorage.getItem('userSess'))
    let i = 0;
    let j = 0;
    let bool = true;

    const allrecipes = () =>{
        for (i; i < wishes.length; i++) {
            const elem1 = wishes[i];
            for (j; j < recipes.length; j++) {
                const elem2 = recipes[j];
                if(elem1.recipeId == elem2.id){
                    allwishes.push(elem2)
                    break;
                }
            }
            bool = false;
        }

        
    }  
    
    useEffect(() => {
        if(bool == true){
            RecipeService.getAllRecipes().then((response) => {
            setRecipes(response.data)
            //console.log(recipes)
        }).catch(error => {
            console.log(error)
        })
        WishlistService.getAllWishes(user.id).then((response) =>{
            setWishes(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
        }
    }, [allrecipes()])
    

    return (
        <div>
            <div class="row" >
                <div class="col-1"></div>
                    <div class="col-10">
                        {
                        allwishes.map(
                                allwish =>
                                <div class="card mb-3">
                                    <a href={`/view-recipe/${allwish.id}`} class="no-style"><img src={allwish.imageUrl} class="card-img-top" alt="..." style={{borderRadius:"40px"}}/></a>
                                    <div class="card-body">
                                        <h5 class="card-title"><i class="fa fa-clock-o" aria-hidden="true"> </i> {allwish.prepTime}</h5>
                                        <a href={`/view-recipe/${allwish.id}`} class="no-style"><p class="card-text">{allwish.name}</p></a>
                                        <p class="card-text"><small class="text-muted">{allwish.cuisine} | {allwish.diet}</small></p>
                                    </div>
                                </div>
                            )
                        }        
                </div>
                <div style={{textAlign:"end"}}>
                <a href='/' style={{textDecoration:"none",paddingRight:"20px",paddingLeft:"20px",fontSize:"large",color:"maroon",backgroundColor:"white", borderRadius:"100px"}}>Home</a>
                </div>
            </div>
        </div>
    )

}

export default WishlistComponent