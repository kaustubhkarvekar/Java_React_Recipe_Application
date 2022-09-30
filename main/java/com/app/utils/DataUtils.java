package com.app.utils;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.app.pojos.Recipe;

@SuppressWarnings("unused")
public class DataUtils {

	private final static String CSV_FILE_NAME = "recipeData";
	private final static String CSV_FILE_PATH = System.getProperty("user.dir") + File.separator + "src" + File.separator
			+ "main" + File.separator + "resources" + File.separator + "data" + File.separator + CSV_FILE_NAME
			+ ".xlsx";

	public static String handleStringConversion(Object object) {
		String value = null;

		if (object.equals(null))
			value = "0";
		else if (object instanceof Integer)
			value = String.valueOf(object);
		else
			value = object.toString();
		return value;
	}

	public static List<Recipe> getListsOfRecipes() {
		List<Recipe> listOfRecipes = new ArrayList<Recipe>();
		try {
			FileInputStream file = new FileInputStream(new File(CSV_FILE_PATH));
			Workbook workbook = new XSSFWorkbook(file);
			Sheet sheet = workbook.getSheet("recipes");
			int numberOfRows = sheet.getLastRowNum();
			System.out.println("Before forloop");

			for (int i = 1; i <= numberOfRows; i++) {
				Recipe recipe = new Recipe();
				recipe.setId(sheet.getRow(i).getCell(0).getRowIndex());

				recipe.setName(handleStringConversion(sheet.getRow(i).getCell(0).getStringCellValue()));

				recipe.setImageUrl(handleStringConversion(sheet.getRow(i).getCell(1).getStringCellValue()));

				recipe.setDescription(handleStringConversion(sheet.getRow(i).getCell(2).getStringCellValue()));

				recipe.setCuisine(handleStringConversion(sheet.getRow(i).getCell(3).getStringCellValue()));

				recipe.setCourse(handleStringConversion(sheet.getRow(i).getCell(4).getStringCellValue()));

				recipe.setDiet(handleStringConversion(sheet.getRow(i).getCell(5).getStringCellValue() == null ? ""
						: sheet.getRow(i).getCell(5).getStringCellValue()));
				
				recipe.setPrepTime(handleStringConversion(sheet.getRow(i).getCell(6).getStringCellValue()));
				
				recipe.setInstructions(handleStringConversion(sheet.getRow(i).getCell(7).getStringCellValue()));
				
				listOfRecipes.add(recipe);
			}
			workbook.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listOfRecipes;
	}
}
