package com.siaproject.backend.entity;
import jakarta.persistence.*;
import lombok.*;
import java.util.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(unique = true, nullable = false)
    private String userEmail;

    @Column(nullable = false)
    private String userPassword;

    private String userFirstname;
    private String userLastname;
    private String userMiddlename;

    @Temporal(TemporalType.DATE)
    private Date userBirthdate;

    @Transient
    private int age;

    @Temporal(TemporalType.DATE)
    private Date lastLoginDate;

    private boolean isAuthenticated;
    private boolean isLoggedOut;

}
