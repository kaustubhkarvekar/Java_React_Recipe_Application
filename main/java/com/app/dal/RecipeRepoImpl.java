package com.app.dal;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Recipe;

@Repository
@Transactional
public class RecipeRepoImpl implements IRecipeRepo {

	@Autowired
	private EntityManager entityManager;

	@Override
	public String loadDatabase(List<Recipe> listOfRecipes) {
		// TODO Auto-generated method stub
		Session currentSession = entityManager.unwrap(Session.class);
		try {
			for (Recipe recipe : listOfRecipes) {
				currentSession.save(recipe);
			}
			return "Congratulations All Recipes has been  SAVED Successfully";
		} catch (Exception e) {
			e.printStackTrace();
			return "OOOOPPPPSSS !!! Sorry , Your Recipes Details Can't Save, Please Check and Save again, Thanks !! ";
		}
	}

}
