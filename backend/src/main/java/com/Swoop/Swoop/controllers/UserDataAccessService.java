package com.Swoop.Swoop.controllers;
import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.Ride;
import com.Swoop.Swoop.models.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.math.*;

@Repository("controller")
public class UserDataAccessService implements SwoopDao {
    private static Database DB = Database.getInstance();

    @Override
    public int insertUser(String email, User user) {
        return DB.addUser(email, user);
    }

	@Override
	public void addRide(User user, String start, String end, float distance, float startLat, float startLong, float endLat, float endLong) {
		Ride r = new Ride(start, end, distance, startLat, startLong,  endLat, endLong);
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

	@Override
	public Map<Integer, Ride> getRides() {
		return DB.rides;
	}

	@Override
	public void finishRide(User u) {
		u.inRide = false;
		int currentRideID = u.rides.get(u.rides.size() - 1);
		Ride r = getRideByID(currentRideID);
		r.finish();
	}

	@Override
	public Ride getRideByID(int currentRideID) {
		return DB.rides.get(currentRideID);
	}

	@Override
	public void joinRide(User user, int rideID) {
		user.addRide(getRideByID(rideID));
	}

	@Override
	public Map<Integer, Ride> getRides(float startLat, float startLon) {
		Map<Integer, Ride> closestRides = new HashMap<>();
		for (Integer id: getRides().keySet()) {
			if (getDistanceMile(startLat, startLon, 
			getRides().get(id).startCoordinates[0], getRides().get(id).startCoordinates[1]) <= 10) {
				closestRides.put(id, getRides().get(id));
			}
		}

		return closestRides;
	}

	public float getDistanceKM(float lat1, float lon1, float lat2, float lon2) {
		float R = 6371, dLat = deg2rad(lat2 - lat1), dLon = deg2rad(lon2 - lon1);

		float a = (float) (Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2));
		float c = (float) (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
		return R * c;
	}

	public float getDistanceMile(float lat1, float lon1, float lat2, float lon2) {
		return getDistanceKM(lat1, lon1, lat2, lon2) / 1.609f;
	}

	public float deg2rad(float deg) {
		return deg * ((float) Math.PI/180);
	}
}

