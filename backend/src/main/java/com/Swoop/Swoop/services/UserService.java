package com.Swoop.Swoop.services;

import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.controllers.UserDao;
import com.Swoop.Swoop.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    private final UserDao userController;

    @Autowired
    public UserService(@Qualifier("controller") UserDao userController) {
        this.userController = userController;
    }

    public int addUser(User user){
        return userController.insertUser(user.getEmail(), user);
    }
    public Database getAllUsers(){
        return userController.selectAllUsers();
    }
    public Optional<User> getUserByEmail(String email){
        return userController.selectUserByEmail(email);
    }
    public int deleteUser(String email){
        return userController.deleteUserByEmail(email);
    }
    public int updateUser(String email, User user){
        return userController.updateUserByEmail(email,user);
    }
}
