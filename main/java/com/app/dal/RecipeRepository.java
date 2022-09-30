package com.app.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

}
