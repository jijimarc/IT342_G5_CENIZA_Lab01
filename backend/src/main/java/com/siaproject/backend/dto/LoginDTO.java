package com.siaproject.backend.dto;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private String userEmail;
    private String userPassword;
}
