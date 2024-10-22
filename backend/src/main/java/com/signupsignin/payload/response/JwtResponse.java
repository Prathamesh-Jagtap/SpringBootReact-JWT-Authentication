package com.signupsignin.payload.response;

import lombok.Data;

import java.util.List;

@Data
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    private String birthdate;
    private List<String> roles;

    public JwtResponse(String accessToken, Long id, String username, String email, String birthdate, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.birthdate = birthdate;
        this.roles = roles;
    }
}

