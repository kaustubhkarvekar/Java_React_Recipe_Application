package com.app.service;

import java.util.List;

import com.app.pojos.Wishlist;

public interface IWishlistService {

	List<Wishlist> getAll(int id);
	String deleteWish(int id);
	Wishlist addNewWish(Wishlist wish);
}
