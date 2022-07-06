package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.entity.CarImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarImageRepo extends JpaRepository<CarImage, String> {
}
