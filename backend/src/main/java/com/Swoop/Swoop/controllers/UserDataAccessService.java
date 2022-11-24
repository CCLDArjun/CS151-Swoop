package com.Swoop.Swoop.controllers;
import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.Ride;
import com.Swoop.Swoop.models.User;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository("controller")
public class UserDataAccessService implements UserDao {
    private static Database DB = Database.getInstance();

    @Override
    public int insertUser(String email, User user) {
        return DB.addUser(email, user);
    }

	@Override
	public void addRide(User user, String start, String end, int distance) {
		Ride r = new Ride(start, end, distance);
		user.addRide(r);
		DB.addRide(r);
	}

    @Override
    public int addUser(User user) {
        return 0;
    }

    @Override
    public Database selectAllUsers() {
        return DB;
    }

    @Override
    public Optional<User> selectUserByEmail(String email) {
        return DB.selectUserByEmail(email);
    }
    @Override
    public int deleteUserByEmail(String email) {
        return DB.deleteUser(email);
    }

    @Override
    public int updateUserByEmail(String email, User user) {
        return DB.updateUserByEmail(email, user);
    }
}
