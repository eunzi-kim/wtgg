package com.web.webtoon.model.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.webtoon.model.Webtoon;
import com.web.webtoon.model.dao.WebtoonDao;
@Service
public class WebtoonServiceImpl implements WebtoonService {

	@Autowired
	SqlSession sqlsession;
	
	@Override
	public List<Webtoon> getRankingList() throws Exception {
		return sqlsession.getMapper(WebtoonDao.class).getRankingList();
	}

	@Override
	public Webtoon getWebtoonDetail(int id) throws Exception {
		return sqlsession.getMapper(WebtoonDao.class).getWebtoonDetail(id);
	}

	@Override
	public Webtoon getTestResult(Map map) throws Exception {
		return sqlsession.getMapper(WebtoonDao.class).getTestResult(map);
	}

}
