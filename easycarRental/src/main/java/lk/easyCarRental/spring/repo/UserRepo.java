package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String> {
}
