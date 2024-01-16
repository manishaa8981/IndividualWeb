package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false)
    private long id;

    @Column(name="email", nullable = false, unique = true)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    @Column(name="confirm_password", nullable = false)
    private String confirmPassword;

    @Column(name="full_name", nullable = false)
    private String fullName;

    @Column(name="security_question", nullable = false)
    private String securityQuestion;
}
