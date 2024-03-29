package com.app.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.User;

@Service
@Transactional
public class UserDaoImpl implements IUserDao 
{
	@Autowired
	SessionFactory sf;

	
	@Override
	public Integer registerUser(User user) {
		
		return (Integer) sf.getCurrentSession().save(user);
	}


	@Override
	public User login(User user) 
	{
		String jpql="select u from User u where u.email=:em and u.password=:pass";
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("em",user.getEmail()).
				setParameter("pass",user.getPassword()).getSingleResult();
	}

	
	

}
