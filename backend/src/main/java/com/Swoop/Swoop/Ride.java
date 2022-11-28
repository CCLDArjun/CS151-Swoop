package com.Swoop.Swoop;

import java.util.ArrayList;

import ch.qos.logback.core.joran.sanity.Pair;
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
	public float[] startCoordinates = new float[2]; // startCoordinates[0] = startLatitude, startCoordinates[1] = startLongitude
	public float[] endCoordinates = new float[2];
	public enum STATUS {
		ACTIVE, FINISHED
	};
	public STATUS status;

	public Ride(String start, String end, float distance, float startLat, float startLong, float endLat, float endLong) {
		this.id = ++lastID;
		this.start = start;
		this.end = end;
		this.distance = distance;
		this.CO2 = (distance / averageMPG) * Co2PerGallon;
		this.startCoordinates[0] = startLat;
		this.startCoordinates[1] = startLong;
		this.endCoordinates[0] = endLat;
		this.endCoordinates[1] = endLong;
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
