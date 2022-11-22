package com.Swoop.Swoop;
import com.Swoop.Swoop.User;

public interface UserController {
    int insertUser(String email, User user);
    int addUser(User user);
}