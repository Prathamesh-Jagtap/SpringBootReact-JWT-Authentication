package com.signupsignin.controller;

import com.signupsignin.service.UserDetailsImpl;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public Map<String, Object> getUserProfile(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return Map.of(
                "username", userDetails.getUsername(),
                "email", userDetails.getEmail(),
                "birthdate", userDetails.getBirthdate(),
                "roles", userDetails.getAuthorities().stream()
                        .map(role -> role.getAuthority())
                        .collect(Collectors.toList())
        );
    }
}

