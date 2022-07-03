package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<Reservation, String> {
}
