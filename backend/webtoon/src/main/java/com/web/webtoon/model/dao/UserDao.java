package com.web.webtoon.model.dao;

import java.util.Map;

public interface UserDao {
	public int insertUser(Map map) throws Exception;
	
	public int changePassword(Map map) throws Exception;
}
