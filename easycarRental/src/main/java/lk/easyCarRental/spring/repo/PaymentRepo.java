package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment, String> {
}
