package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Recipe;
import com.app.service.IRecipeService;

@RestController
@CrossOrigin
public class RecipeController {

	@Autowired
	private IRecipeService recipeService;

	public RecipeController() {
		System.out.println("In constructor of " + getClass());
	}

	@GetMapping("/loadDb")
	public String loadDatabase() {
		System.out.println("In loadDatabase !!!");
		return recipeService.loadDatabase();
	}

	@GetMapping("custom/api/recipes")
	public List<Recipe> showAllRecipes() {
		System.out.println("In getAllRecipes !!!");
		return recipeService.getAllRecipes();
	}

	@GetMapping("custom/api/recipes/{id}")
	public Recipe showRecipeById(@PathVariable int id) {
		System.out.println("In getRecipeById RECIPEID = " + id);
		return recipeService.getRecipe(id);
	}

	@DeleteMapping("custom/api/recipes/{id}")
	public String removeRecipe(@PathVariable int id) {
		System.out.println("In RemoveRecipesById RECIPEID = " + id);
		return recipeService.deleteRecipeDetails(id);
	}

	@PostMapping("/custom/api/recipes")
	public Recipe addNewRecipe(@RequestBody Recipe newRecipe) {
		System.out.println("In addNewRecipes RECIPE = " + newRecipe);
		return recipeService.saveRecipe(newRecipe);
	}

	@PutMapping("/custom/api/recipes")
	public Recipe updateRecipe(@RequestBody Recipe updatedRecipe) {
		System.out.println("In updateRecipe RECIPE = " + updatedRecipe);
		return recipeService.updateRecipe(updatedRecipe);
	}
}
