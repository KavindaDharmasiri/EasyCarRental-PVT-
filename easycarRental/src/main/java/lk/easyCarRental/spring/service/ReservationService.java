package lk.easyCarRental.spring.service;

import lk.easyCarRental.spring.dto.ReservationDTO;

import java.util.List;

public interface ReservationService {
    void saveReservation(ReservationDTO dto);

    void deleteReservation(String id);

    void updateReservation(ReservationDTO dto);

    ReservationDTO searchReservation(String id);

    List<ReservationDTO> getAllReservations();
}
