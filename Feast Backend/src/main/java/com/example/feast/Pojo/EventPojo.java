package com.example.feast.Pojo;
import com.example.feast.Entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Timer;

@Getter
@Setter
public class EventPojo {

    private Long id;

    @OneToOne
    @JoinColumn(name="user_id" , referencedColumnName = "first_name")
    private User user;

    @NotNull
    private Integer eventPrice;

    @NotNull
    private Boolean eventStatus;

    @NotNull
    private Long contact;

    @NotNull
    private String eventName;

    @NotNull
    private Date eventDate;

    @NotNull
    private Timer eventTime;

    @NotNull
    private Integer noOfGuest;

    private String specialRequest;

}