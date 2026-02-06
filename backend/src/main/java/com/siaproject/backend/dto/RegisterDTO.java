package com.siaproject.backend.dto;
import lombok.*;

@Getter
@Setter
public class RegisterDTO {
    private String userEmail;
    private String userPassword;
    private String confirmPassword;
}
