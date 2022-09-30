package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.dal.UserRepository;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public List<User> getAllUserDetails() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

	@Override
	public User saveUserDetails(User transientUser) {
		// TODO Auto-generated method stub
		transientUser.setUserRole(Role.CUSTOMER);
		return userRepo.save(transientUser);
	}

	@Override
	public String deleteUserDetails(int userId) {
		// TODO Auto-generated method stub
		String noti = "Delete by ID failed!!!!";
		System.out.println("In delete UserService");
		if (userRepo.existsById(userId)) {
			userRepo.deleteById(userId);
			noti = "Delete by ID operation successful!!!! for UserID = " + userId;
		}
		return noti;
	}

	@Override
	public User getUserDetails(int userId) {
		// TODO Auto-generated method stub
		return userRepo.findById(userId)
				.orElseThrow(() -> new RuntimeException("UserID = " + userId + " not FOUND!!!"));
	}

	@Override
	public User updateUserDetails(User updatedDetachedUser) {
		// TODO Auto-generated method stub
		updatedDetachedUser.setUserRole(Role.CUSTOMER);
		return userRepo.save(updatedDetachedUser);
	}

	@Override
	public User validateUser(User user) {
		List<User> list = userRepo.findAll();
		for (User u : list) {
			if(u.getEmail().equals(user.getEmail())) {
				u.getPassword().equals(user.getPassword());
				return u;
			}
		}
		
		throw new RuntimeException();
	}

}
