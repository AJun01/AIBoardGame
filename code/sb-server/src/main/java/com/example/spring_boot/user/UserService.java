package com.example.spring_boot.user;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class UserService {

    public List<User> getStudents(){
        return List.of(
                new User(1L,
                        "yujun01",
                        "85631596a",
                        "yujunliu150@gmail.com",
                        LocalDate.of(2000, Month.MARCH, 5)
                )
        );
    }
}
