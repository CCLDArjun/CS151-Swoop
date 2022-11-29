package com.Swoop.Swoop.models;

import java.util.ArrayList;

import com.Swoop.Swoop.Ride;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class User {
	enum UserType{
		DRIVER,RIDER
	}

	private String fullName;
	private String email;
	private String password;
	public ArrayList<Integer> rides = new ArrayList<>();
	private UserType currentUserType;
	public boolean inRide = false;
	public float carbonGoal;
	public User(@JsonProperty("fullName") String fullName, @JsonProperty("email")String email, @JsonProperty("password")String password) {
		this.fullName = fullName;
		this.email = email;
		this.password = password;
		carbonGoal = 0;
	}

	public void addRide(Ride r) {
		inRide = true;
		rides.add(r.id);
		r.add(this);
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setCurrentUserType(UserType currentUserType) {
		this.currentUserType = currentUserType;
	}

	public String getFullName() {
		return fullName;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public UserType getCurrentUserType() {
		return currentUserType;
	}

	public void finishRide() {
		inRide = false;
	}

	public void setGoal(float carbonGoal) {
		this.carbonGoal = carbonGoal;
	}
}
