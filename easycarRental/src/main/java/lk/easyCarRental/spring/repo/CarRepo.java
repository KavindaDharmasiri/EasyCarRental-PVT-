package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, String> {
}
