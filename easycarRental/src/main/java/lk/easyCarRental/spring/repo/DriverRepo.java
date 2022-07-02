package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver, String> {

}

