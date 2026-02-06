package com.siaproject.backend.dto;
import lombok.*;
import java.util.*;

@Getter
@Setter
public class ProfileDTO {
    private int userId;
    private String userEmail;
    private String userFirstname;
    private String userLastname;
    private String userMiddlename;
    private Date userBirthdate;
}
