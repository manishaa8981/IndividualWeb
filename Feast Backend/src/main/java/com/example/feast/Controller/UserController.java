package com.example.feast.Controller;

import com.example.feast.Entity.User;
import com.example.feast.Service.UserService;
import com.example.feast.Pojo.UserPojo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD

@RestController
@RequestMapping("register")

=======
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("register")
@CrossOrigin(origins = "http://localhost:4004")
>>>>>>> 11bfc64d8c646bcc5c1a90cd88702b86a354e570
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> createUsers(@RequestBody UserPojo userPojo) {
        try {
            userService.createUser(userPojo);
            return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }


    }

<<<<<<< HEAD
    @GetMapping("/login")
    public ResponseEntity<Object> loginUsers(@RequestBody User loginUsers){
        try{
            System.out.println(loginUsers.getUsername());
            System.out.println(loginUsers.getPassword());
            return new ResponseEntity<>(loginUsers, HttpStatus.CONFLICT);

        }catch (Exception e){
            System.out.println("dont match");

=======
    @PostMapping("/login")
    public ResponseEntity<Object> loginUsers(@RequestBody UserPojo loginPojo) {
        try {
            String loginMessage = userService.loginUser(loginPojo.getEmail(), loginPojo.getPassword());
            return new ResponseEntity<>(loginMessage, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Authentication failed: " + e.getMessage());
>>>>>>> 11bfc64d8c646bcc5c1a90cd88702b86a354e570
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }

<<<<<<< HEAD
    }

}
=======

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllData() {
        List<User> allUsers = userService.getAllData();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable long id) {
        try {
            Optional<User> user = userService.getUserById(id);
            if (user.isPresent()) {
                return new ResponseEntity<>(user.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteUserById/{id}")
    public ResponseEntity<Object> deleteUserById(@PathVariable long id) {
        try {
            userService.deleteUserById(id);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
>>>>>>> 11bfc64d8c646bcc5c1a90cd88702b86a354e570
