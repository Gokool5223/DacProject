package com.app.dao;

import com.app.pojos.User;

public interface IUserDao 
{
	public Integer registerUser(User user);
	public User login(User user);
	
}

