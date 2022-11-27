package com.Swoop.Swoop.controllers;
import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.Ride;
import com.Swoop.Swoop.models.User;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface SwoopDao {
    int insertUser(String email, User user);
    int addUser(User user);
    Database selectAllUsers();
    Optional<User> selectUserByEmail(String email);
    int deleteUserByEmail(String email);
    int updateUserByEmail(String email, User user);
	void addRide(User user, String start, String end, float distance, float startLat, float startLong, float endLat, float endLong);
	Map<Integer, Ride> getRides();
	void finishRide(User u);
	Ride getRideByID(int currentRideID);
	void joinRide(User user, int rideID);
}
