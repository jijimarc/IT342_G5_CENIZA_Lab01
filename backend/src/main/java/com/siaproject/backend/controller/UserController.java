package com.siaproject.backend.controller;

import com.siaproject.backend.dto.LoginDTO;
import com.siaproject.backend.dto.ProfileDTO;
import com.siaproject.backend.dto.RegisterDTO;
import com.siaproject.backend.entity.User;
import com.siaproject.backend.service.AuthenticationService;
import com.siaproject.backend.service.ProfileService;
import com.siaproject.backend.service.RegisterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final RegisterService registrationService;
    private final AuthenticationService authenticationService;
    private final ProfileService profileService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterDTO data) {
        User newUser = registrationService.register(data);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO data) {
        String token = authenticationService.login(data);
        return ResponseEntity.ok(token);
    }

    @PutMapping("/profile")
    public ResponseEntity<User> updateProfile(@RequestBody ProfileDTO data) {
        User updatedUser = profileService.updateProfile(data);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable int id) {
        profileService.deleteAccount(id);
        return ResponseEntity.noContent().build();
    }
}