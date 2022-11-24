package com.Swoop.Swoop.controllers;
import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.models.User;

import java.util.Map;
import java.util.Optional;

public interface UserDao {
    int insertUser(String email, User user);
    int addUser(User user);
    Database selectAllUsers();
    Optional<User> selectUserByEmail(String email);
    int deleteUserByEmail(String email);
    int updateUserByEmail(String email, User user);
}