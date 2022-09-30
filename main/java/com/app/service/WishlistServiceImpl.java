package com.app.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dal.WishlistRepository;
import com.app.pojos.Wishlist;

@Service
@Transactional
public class WishlistServiceImpl implements IWishlistService {

	@Autowired
	private WishlistRepository wishlistRepo;
	
	@Override
	public List<Wishlist> getAll( int id) {
		// TODO Auto-generated method stub
		List<Wishlist> newList = new ArrayList<Wishlist>();
		List<Wishlist> list = wishlistRepo.findAll();
		for (Wishlist wishlist : list) {
			if(wishlist.getUserId() == id) {
				newList.add(wishlist);
			}
		}
		return newList;
	}

	@Override
	public String deleteWish(int id) {
		// TODO Auto-generated method stub
		String message = "Delete operation failed !!!";
		if(wishlistRepo.existsById(id)) {
			wishlistRepo.deleteById(id);
			message = "Delete opeartion was successful ID = "+id;
		}
		return message;
	}

	@Override
	public Wishlist addNewWish(Wishlist newWish) {
		// TODO Auto-generated method stub
		return wishlistRepo.save(newWish);
	}

}
