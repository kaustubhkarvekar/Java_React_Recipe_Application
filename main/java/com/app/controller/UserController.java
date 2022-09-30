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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/custom/api/users")
@CrossOrigin
public class UserController {

	@Autowired
	private IUserService userService;

	public UserController() {
		System.out.println("In constructor of " + getClass());
	}

	@GetMapping
	public List<User> getAllUsers() {
		System.out.println("In getAllUsers !!!");
		return userService.getAllUserDetails();
	}

	@PostMapping
	public User insertNewUser(@RequestBody User user) {
		System.out.println("In insertNewUser USER = "+user);
		return userService.saveUserDetails(user);
	}

	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		System.out.println("In deleteUser ID = "+id);
		return userService.deleteUserDetails(id);
	}

	@GetMapping("/{id}")
	public User getUserById(@PathVariable int id) {
		System.out.println("In getUserById ID = "+id);
		return userService.getUserDetails(id);
	}

	@PutMapping
	public User updateUserDetails(@RequestBody User user) {
		System.out.println("In updateUserDetails USER = "+user);
		return userService.updateUserDetails(user);
	}
	
	@PostMapping("/validate")
	public User validateUser(@RequestBody User user) {
		
		return userService.validateUser(user);
	}
}
