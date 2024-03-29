package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IUserDao;
import com.app.pojos.User;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController
{
	@Autowired
	IUserDao iuserDao;
	
	


	@PostMapping("/register")
	public Integer register(@RequestBody User user) {
		System.out.println(user);
		return iuserDao.registerUser(user);
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user)
	{
		System.out.println(user);
		return iuserDao.login(user);
	}


}
