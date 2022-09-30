package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IUserService {
	List<User> getAllUserDetails();

	User saveUserDetails(User transientUser);

	String deleteUserDetails(int userId);

	User getUserDetails(int userId);

	User updateUserDetails(User updatedDetachedUser);
	
	User validateUser(User user);
}
