package com.app.dal;

import java.util.List;

import com.app.pojos.Recipe;

public interface IRecipeRepo {

	String loadDatabase(List<Recipe> listOfRecipes);
}
