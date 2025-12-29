package com.example.services;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class Controller {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/register")
    public String addUser(@RequestBody User user) {
        userRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User u = userRepository.findByEmailAndPassword(
                user.getEmail(),
                user.getPassword());

        if (u != null) {
            return "SUCCESS";
        } else {
            return "FAIL";
        }
    }
}