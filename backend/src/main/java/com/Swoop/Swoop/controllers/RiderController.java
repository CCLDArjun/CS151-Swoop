package com.Swoop.Swoop.controllers;

import com.Swoop.Swoop.Database;
import com.Swoop.Swoop.Ride;
import com.Swoop.Swoop.models.User;
import com.Swoop.Swoop.services.SwoopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequestMapping("api/v1/rider")
@RestController
public class RiderController {
    private final SwoopService userService;
    @Autowired
    public RiderController(SwoopService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/addRide")
    public void addRide(@RequestParam String email, @RequestParam String start,
							@RequestParam String end, @RequestParam float distance, 
							@RequestParam float startLat, @RequestParam float startLong,
                            @RequestParam float endLat, @RequestParam float endLong) {
		User u = userService.getUserByEmail(email).get();
		userService.addRide(u, start, end, distance, startLat, startLong, endLat, endLong);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/rides")
    public Map<Integer, Ride> getRides() {
		return userService.getRides();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getRides")
    public Map<Integer, Ride> getRides(@RequestParam float startLat, @RequestParam float startLong) {
		return userService.getRides(startLat, startLong);
    }
}
