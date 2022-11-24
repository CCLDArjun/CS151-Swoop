package com.Swoop.Swoop.controllers;

import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.models.User;
import com.Swoop.Swoop.services.SwoopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RequestMapping("api/v1/user")
@RestController
public class UserController {
    private final SwoopService userService;
    @Autowired
    public UserController(SwoopService userService) {
        this.userService = userService;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public Database getAllUsers(){
        return userService.getAllUsers();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "{email}")
    public Optional<User> getUserByEmail(@PathVariable("email") String email){
        return userService.getUserByEmail(email);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "{email}")
    public void deleteUserByEmail(@PathVariable("email") String email){
        userService.deleteUser(email);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(path = "{email}")
    public void updateUser(@PathVariable("email") String email, @RequestBody User userToUpdate){
        userService.updateUser(email,userToUpdate);
    }
}
