package com.example.spring_boot.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getStudents(){
        return userService.getStudents();
    }

    @PostMapping
    public void registerNewUser(@RequestBody User user){
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        userService.deleteUser(userId);
    }
    @PostMapping("/login")
    public String loginUser(@RequestParam String email, @RequestParam String password) {
        boolean isAuthenticated = userService.loginUser(email, password);
        if (isAuthenticated) {
            return "Login successful!";
        } else {
            return "Invalid email or password.";
        }
    }
}
