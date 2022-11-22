package com.Swoop.Swoop;

public class User {
	enum UserType{
		DRIVER,RIDER
	}

	private String fullName;
	private String email;
	private String password;
	private UserType currentUserType;
//TODO: Use MVC structure and implement a User Doa
	public User(String fullName, String email, String password, com.Swoop.Swoop.User.UserType currentUserType) {
		this.fullName = fullName;
		this.email = email;
		this.password = password;
		this.currentUserType = currentUserType;
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

	public void setCurrentUserType(com.Swoop.Swoop.User.UserType currentUserType) {
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

	public com.Swoop.Swoop.User.UserType getCurrentUserType() {
		return currentUserType;
	}
}
