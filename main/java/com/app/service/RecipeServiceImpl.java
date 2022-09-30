package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dal.IRecipeRepo;
import com.app.dal.RecipeRepository;
import com.app.pojos.Recipe;
import com.app.utils.DataUtils;


@Service
@Transactional
public class RecipeServiceImpl implements IRecipeService {

	@Autowired
	private RecipeRepository recipeRepo;

	@Autowired
	private IRecipeRepo recipeRepos;

	@Override
	public String loadDatabase() { 
		// TODO Auto-generated method stub
		List<Recipe> listOfRecipes = DataUtils.getListsOfRecipes();
		System.out.println(listOfRecipes);
		return recipeRepos.loadDatabase(listOfRecipes);
	}

	@Override
	public List<Recipe> getAllRecipes() {
		// TODO Auto-generated method stub
		return recipeRepo.findAll();
	}

	@Override
	public Recipe saveRecipe(Recipe transientRecipe) {
		// TODO Auto-generated method stub
		return recipeRepo.save(transientRecipe);
	}

	@Override
	public String deleteRecipeDetails(int recipeId) {
		// TODO Auto-generated method stub
		String message = "Delete by ID failed!!!!";
		System.out.println("In delete RecipeService");
		if (recipeRepo.existsById(recipeId)) {
			recipeRepo.deleteById(recipeId);
			message = "Delete by ID operation successful!!!! for UserID = " + recipeId;
		}
		return message;
	}

	@Override
	public Recipe getRecipe(int recipeId) {
		// TODO Auto-generated method stub
		return recipeRepo.findById(recipeId)
				.orElseThrow(() -> new RuntimeException("RecipeID = " + recipeId + " not FOUND!!!"));
	}

	@Override
	public Recipe updateRecipe(Recipe updatedRecipe) {
		// TODO Auto-generated method stub
		return recipeRepo.save(updatedRecipe);
	}

}
