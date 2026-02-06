package com.siaproject.backend.service;

import com.siaproject.backend.dto.ProfileDTO;
import com.siaproject.backend.entity.User;
import com.siaproject.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final UserRepository userRepository;

    public User updateProfile(ProfileDTO data) {
        User existingUser = userRepository.findById(data.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        existingUser.setUserFirstname(data.getUserFirstname());
        existingUser.setUserLastname(data.getUserLastname());
        existingUser.setUserMiddlename(data.getUserMiddlename());
        existingUser.setUserBirthdate(data.getUserBirthdate());

        return userRepository.save(existingUser);
    }

    public void deleteAccount(int userId) {
        userRepository.deleteById(userId);
    }
}
