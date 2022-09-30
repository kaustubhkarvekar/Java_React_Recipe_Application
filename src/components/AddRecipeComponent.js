import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import RecipeService from '../services/RecipeService'

const AddRecipeComponent = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const user = JSON.parse(sessionStorage.getItem('userSess'))
    const navigate = useNavigate();

    const saveRecipe = (r) => {
        r.preventDefault();

        const recipe = {name, description, prepTime, imageUrl}

       if(user.role === "ADMIN"){
         RecipeService.createRecipe(recipe).then((response) => {
            console.log(response.data)
            navigate('/recipes');
        }).catch(error => {
            console.log(error)
        })
        }else{
            alert("You are not AUTHORIZED!!!")
            navigate('/');
        }
    }


  return (
    <div>
        <br/>
        <br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Recipe</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Recipe Name:- </label>
                                <input
                                    type='text'
                                    placeholder='Enter Recipe Name'
                                    name='recipeName'
                                    className='form-control'
                                    value={name}
                                    onChange={(r) => setName(r.target.value)}
                                    >
                                    </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Recipe Description:- </label>
                                <input
                                    type='text'
                                    placeholder='Enter Recipe Description'
                                    name='recipeDescription'
                                    className='form-control'
                                    value={description}
                                    onChange={(r) => setDescription(r.target.value)}
                                    >
                                    </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Recipe Preparation Time:- </label>
                                <input
                                    type='text'
                                    placeholder='Enter Recipe PrepTime'
                                    name='recipePrepTime'
                                    className='form-control'
                                    value={prepTime}
                                    onChange={(r) => setPrepTime(r.target.value)}
                                    >
                                    </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Recipe Image URL:- </label>
                                <input
                                    type='text'
                                    placeholder='Enter Recipe Image URL'
                                    name='recipeImage'
                                    className='form-control'
                                    value={imageUrl}
                                    onChange={(r) => setImageUrl(r.target.value)}
                                    >
                                    </input>
                            </div>
                            <div>
                            <button className='btn btn-yellow' onClick={(r) => saveRecipe(r)}>Submit</button> <Link to='/recipes' className='btn btn-yellow'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRecipeComponent