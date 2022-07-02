package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepo extends JpaRepository<Rent, String> {
}
