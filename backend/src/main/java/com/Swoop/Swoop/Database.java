package com.Swoop.Swoop;

import com.Swoop.Swoop.models.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Database
 */
public class Database {
    private static Database dbSingleton;
    private static Map<String, User> DB;
	public Map<Integer, Ride> rides = new HashMap<>();

    private Database(){ }

    public static synchronized Database getInstance(){
        if(dbSingleton == null){
            dbSingleton = new Database();
            DB = new HashMap<>();
        }
        return dbSingleton;
    }

    public Map<String, User> getDB() {
        return DB;
    }

    public void setDB(Map<String, User> DB) {
        Database.DB = DB;
    }

    public int addUser(String email, User user){
        if(!DB.containsKey(email)){
            DB.put(email,user);
            return 1;
        }else {
            return 0;
        }
    }
    public int deleteUser(String email){
        if(DB.containsKey(email)){
            DB.remove(email);
            return 1;
        }
        return 0;
    }
    public int updateUserByEmail(String email, User updatedUser) {
        if (DB.containsKey(email)){
            DB.put(email,updatedUser); // update user
            return 1;
        }
        return 0;
    }
    public Optional<User> selectUserByEmail(String email) {
        if(DB.containsKey(email)) {
            return Optional.ofNullable(DB.get(email));
        }else{
            return null;
        }
    }

	public void addRide(Ride r) {
		rides.put(r.id, r);
	}
}

