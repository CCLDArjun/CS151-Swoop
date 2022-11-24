package com.Swoop.Swoop.controllers;

import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.models.User;
import com.Swoop.Swoop.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RequestMapping("api/v1/rider")
@RestController
public class RiderController {
    private final UserService userService;
    @Autowired
    public RiderController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/addRide")
    public String updateUser(@RequestParam String email, @RequestParam String start,
							@RequestParam String end, @RequestParam int distance) {
		return email + start + end + distance;
    }
}
