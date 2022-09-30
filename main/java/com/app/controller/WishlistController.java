package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.pojos.Wishlist;
import com.app.service.IWishlistService;

@RestController
@RequestMapping("/custom/api/wishlist")
@CrossOrigin(allowedHeaders = "*")
public class WishlistController {

	@Autowired
	private IWishlistService wishService;

	public WishlistController() {
		System.out.println("In constructor of " + getClass());
	}

	@GetMapping("/{id}")
	public List<Wishlist> getAllWishes(@PathVariable int id) {
		return wishService.getAll(id);
	}
	
	@DeleteMapping("/{id}")
	public String deleteWish(@PathVariable int id) {
		return wishService.deleteWish(id);
	}
	
	@PostMapping
	public Wishlist addNewWish(@RequestBody Wishlist newWish) {
		return wishService.addNewWish(newWish);
	}
}
