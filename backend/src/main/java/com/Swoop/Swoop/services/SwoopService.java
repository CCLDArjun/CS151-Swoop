package com.Swoop.Swoop.services;

import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.Ride;
import com.Swoop.Swoop.controllers.SwoopDao;
import com.Swoop.Swoop.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class SwoopService {
    private final SwoopDao controller;

    @Autowired
    public SwoopService(@Qualifier("controller") SwoopDao userController) {
        this.controller = userController;
    }

    public int addUser(User user){
        return controller.insertUser(user.getEmail(), user);
    }
    public Database getAllUsers(){
        return controller.selectAllUsers();
    }
    public Optional<User> getUserByEmail(String email){
        return controller.selectUserByEmail(email);
    }
    public int deleteUser(String email){
        return controller.deleteUserByEmail(email);
    }
    public int updateUser(String email, User user){
        return controller.updateUserByEmail(email,user);
    }

	public void addRide(User user, String start, String end, float distance) {
		controller.addRide(user, start, end, distance);
	}

	public void joinRide(User user, int rideID) {
		controller.joinRide(user, rideID);
	}

	public Map<Integer, Ride> getRides() {
		return controller.getRides();
	}

	public void finishRide(String email) {
		controller.finishRide(controller.selectUserByEmail(email).get());
	}
}
