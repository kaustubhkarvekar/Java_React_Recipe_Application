import React, {useState, useEffect} from 'react'
import RecipeService from '../services/RecipeService'

const WelcomePageComponent = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() =>{
        RecipeService.getAllRecipes().then((response) => {
          setRecipes(response.data)
          console.log(response.data);
        }).catch(error =>{
          console.log(error); 
        })
      }, [])



  return (
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-2">Time for some food! </h1>
                <p class="lead">Wondering what to eat? Choose from the vast variety of cuisines!</p>
                <p class="lead">Deciding what to cook later? Add your favourite dish to your wishlist!</p>
                <hr class="my-4"/>
            </div>
        </div>
        <div class="row" >
            <div class="col-1"></div>
            <div class="col-10">
                {
                    recipes.map(
                        recipe =>
                        <div class="card mb-3">
                            <a href={`/view-recipe/${recipe.id}`} class="no-style"><img src={recipe.imageUrl} class="card-img-top" alt="..." style={{borderRadius:"40px"}}/></a>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fa fa-clock-o" aria-hidden="true"> </i> {recipe.prepTime}</h5>
                                <a href={`/view-recipe/${recipe.id}`} class="no-style"><p class="card-text">{recipe.name}</p></a>
                                <p class="card-text"><small class="text-muted">{recipe.cuisine} | {recipe.diet}</small></p>
                                <div>
                                    <h5><a href={`/add-to-wishlist/${recipe.id}`} class="mat-icons"><i class="material-icons">favorite_border</i></a></h5>
                                </div>
                            </div>
                        </div>
                    )
                }        
            </div>
        </div>
  </div>

  )
}

export default WelcomePageComponent