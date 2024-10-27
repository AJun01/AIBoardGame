package com.example.spring_boot.user;

import jakarta.persistence.*;

import java.lang.reflect.Constructor;
import java.time.LocalDate;

@Entity
@Table(name = "users")
public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String username;
    private String password;
    private String email;
    private LocalDate doc;

    public User() {
    }

    public User(Long id, String username, String password, String email, LocalDate doc) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.doc = doc;
    }

    public User(String username, String password, String email, LocalDate doc) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.doc = doc;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDoc() {
        return doc;
    }

    public void setDoc(LocalDate doc) {
        this.doc = doc;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", doc=" + doc +
                '}';
    }
}
