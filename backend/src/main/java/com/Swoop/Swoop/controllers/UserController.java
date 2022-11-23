package com.Swoop.Swoop.controllers;

import com.Swoop.Swoop.models.User;
import com.Swoop.Swoop.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RequestMapping("api/v1/user")
@RestController
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }
    @GetMapping
    public Map<String, User> getAllUsers(){
        return userService.getAllUsers();
    }
    @GetMapping(path = "{email}")
    public Optional<User> getUserByEmail(@PathVariable("email") String email){
        return userService.getUserByEmail(email);
    }
    @DeleteMapping(path = "{email}")
    public void deleteUserByEmail(@PathVariable("email") String email){
        userService.deleteUser(email);
    }
    @PutMapping(path = "{email}")
    public void updateUser(@PathVariable("email") String email, @RequestBody User userToUpdate){
        userService.updateUser(email,userToUpdate);
    }
}
