package com.Swoop.Swoop;

import java.util.ArrayList;

import com.Swoop.Swoop.models.User;

public class Ride {
	static float averageMPG = 30;
	static float Co2PerGallon = 20;
	static int lastID = 1;
	public float CO2;
	public String start, end;
	public float distance;
	public ArrayList<User> users = new ArrayList<>();
	public int id;
	public enum STATUS {
		ACTIVE, FINISHED
	};
	public STATUS status;

	public Ride(String start, String end, float distance) {
		this.id = ++lastID;
		this.start = start;
		this.end = end;
		this.distance = distance;
		this.CO2 = (distance / averageMPG) * Co2PerGallon;
	}

	public void add(User user) {
		users.add(user);
	}

	public void finish() {
		for (User u: users)
			u.finishRide();
		status = STATUS.FINISHED;
	}
}
