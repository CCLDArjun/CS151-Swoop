package com.Swoop.Swoop.controllers;
import com.Swoop.Swoop.models.User;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository("controller")
public class UserDataAccessService implements UserDao {
    private static Map<String, User> DB = new HashMap<>();

    @Override
    public int insertUser(String email, User user) {
        DB.put(email, user);
        return 1;
    }

    @Override
    public int addUser(User user) {
        return 0;
    }

    @Override
    public Map<String, User> selectAllUsers() {
        return DB;
    }

    @Override
    public Optional<User> selectUserByEmail(String email) {
        if(DB.containsKey(email)) {
            return Optional.ofNullable(DB.get(email));
        }else{
            return null;
        }
    }
    @Override
    public int deleteUserByEmail(String email) {
        if(DB.containsKey(email)){
            DB.remove(email);
            return 1;
        }
        return 0;
    }

    @Override
    public int updateUserByEmail(String email, User user) {
        if (DB.containsKey(email)){
            DB.put(email,user); // update user
            return 1;
        }
        return 0;
    }
}
