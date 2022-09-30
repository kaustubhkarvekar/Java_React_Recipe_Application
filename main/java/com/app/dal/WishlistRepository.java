package com.app.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Wishlist;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {

}
