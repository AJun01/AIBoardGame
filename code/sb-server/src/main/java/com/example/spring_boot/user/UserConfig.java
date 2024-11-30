package com.example.spring_boot.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            // Create multiple users
            User user1 = new User(
                    1L,
                    "Yujun",
                    "85631596aJ@",
                    "Yujunliu150@gmail.com",
                    LocalDate.of(2000, Month.MARCH, 5)
            );

            User user2 = new User(
                    2L,
                    "Alice",
                    "password123",
                    "alice@example.com",
                    LocalDate.of(1995, Month.JUNE, 10)
            );

            User user3 = new User(
                    3L,
                    "Bob",
                    "bobSecurePass",
                    "bob@example.com",
                    LocalDate.of(1988, Month.SEPTEMBER, 20)
            );

            User user4 = new User(
                    4L,
                    "Charlie",
                    "charliePass@99",
                    "charlie@example.com",
                    LocalDate.of(1990, Month.APRIL, 15)
            );

            // Save all users to the repository
            repository.saveAll(List.of(user1, user2, user3, user4));
        };
    }
}