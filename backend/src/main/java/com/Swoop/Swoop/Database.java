package com.Swoop.Swoop;

import com.Swoop.Swoop.models.User;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Database
 */
public class Database {
    private Map<String, User> DB;

    public Database() {
        this.DB = new HashMap<>();
    }

    public Map<String, User> getDB() {
        return DB;
    }

    public void setDB(Map<String, User> DB) {
        this.DB = DB;
    }

    public int addUser(String email, User user){
        if(!this.DB.containsKey(email)){
            this.DB.put(email,user);
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
}

