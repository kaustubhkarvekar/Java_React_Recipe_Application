import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RecipeService from '../services/RecipeService'

const ListRecipeComponent = () => {

    const [recipes, setRecipes] = useState([])
    const user = JSON.parse(sessionStorage.getItem('userSess'))
    const navigate = useNavigate()

    useEffect(() =>{

      if(user.role === "ADMIN"){
        RecipeService.getAllRecipes().then((response) => {
        setRecipes(response.data)
        console.log(response.data);
      }).catch(error =>{
        console.log(error); 
      })
      }else{
        alert("You are not AUTHORIZED!!!")
        navigate("/")
      }
    }, [])

     

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Recipes</h2>
        <Link to='/add-recipe' className='btn btn-primary mb-2'>Add Recipe</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Recipe Id:</th>
                <th>Recipe Name:</th>
                <th>Recipe Description</th>
                <th>Recipe Time Required</th>
            </thead>
            <tbody>
                {
                    recipes.map(
                        recipe =>
                        <tr key={recipe.id}>
                            <td>{recipe.id}</td>
                            <td>
                                <Link to={`/view-recipe/${recipe.id}`}>{recipe.name}</Link>
                            </td>
                            <td>{recipe.description}</td>
                            <td>{recipe.prepTime}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListRecipeComponent