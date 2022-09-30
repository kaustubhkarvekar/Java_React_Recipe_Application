package com.app.service;

import java.util.List;

import com.app.pojos.Recipe;

public interface IRecipeService {

	String loadDatabase();
	List<Recipe> getAllRecipes();
	Recipe saveRecipe(Recipe transientRecipe);
	String deleteRecipeDetails(int recipeId);
	Recipe getRecipe(int recipeId);
	Recipe updateRecipe(Recipe updatedRecipe);

}
