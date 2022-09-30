import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipeService from '../services/RecipeService';

const ViewRecipeComponent = () => {

    const [recipe, setRecipes] = useState([])
    const {id} = useParams();

    useEffect(() => {

        RecipeService.getRecipeById(id).then((response) => {
            setRecipes(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })

    },[id]);
    

  return (
    <>
    <div class="jumbotron" style={{backgroundImage: `url(${recipe.imageUrl})`,backgroundPositionY:"center",borderRadius:"50px",marginTop:"-7%",height:"400px"}}>
        <div class="container">
            <div class="row">
            <div class="col-lg-9">
          <h1 class="display-3">{recipe.name}</h1>
          <p></p>
          </div>
          <div class="col-lg-1"></div>
            <div className='col-lg-2'>
                <h1 class="display-3">{recipe.prepTime}</h1>
                <h5><i>{recipe.cuisine} | {recipe.course}</i></h5>
            </div>
        </div>
        </div>
      </div>
    <div class="container" style={{marginTop:"10px", color:"white", backgroundColor:"rgb(179, 167, 4)",borderRadius:"50px"}}>
        <div class="row">
          <div class="col-md-12">
          <h3 style={{fontSize:"larger",padding:"20px",paddingBottom:"0px" }}>Ideal for: {recipe.diet}</h3>
          <p style={{fontSize:"larger",padding:"20px",paddingBottom:"0px"}}>Description:<br/>
            {recipe.description}</p>
            <p style={{fontSize:"larger",padding:"20px",paddingBottom:"0px"}}>Instructions:<br/>{recipe.instructions}</p>
            <p style={{textAlign:"end"}}>
                <a href='/' style={{textDecoration:"none",paddingRight:"20px",paddingLeft:"20px",fontSize:"large",color:"maroon",backgroundColor:"white", borderRadius:"100px"}}>Home</a>
            </p>
            </div>
        </div>
      </div>
      </>
  )
}

export default ViewRecipeComponent;





