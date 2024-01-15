package com.example.feast.Service;


import com.example.feast.Entity.Reservation;
import com.example.feast.Pojo.ReservationPojo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ReservationService {
    void saveReservation(ReservationPojo reservationPojoPojo);


    List<Reservation> findAll();

    Optional<Reservation> findById(Integer id);

    void deleteById(Integer id);

}

