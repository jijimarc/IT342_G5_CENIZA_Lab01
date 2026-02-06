package com.siaproject.backend.service;

import com.siaproject.backend.dto.LoginDTO;
import com.siaproject.backend.entity.User;
import com.siaproject.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public String login(LoginDTO data) {
        System.out.println("Login attempt for: " + data.getUserEmail());
        System.out.println("Password received: " + data.getUserPassword());
        User user = userRepository.findByUserEmail(data.getUserEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(data.getUserPassword(), user.getUserPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        user.setAuthenticated(true);
        user.setLastLoginDate(new java.util.Date());
        userRepository.save(user);

        return jwtService.generateToken(user.getUserEmail());
    }
}
