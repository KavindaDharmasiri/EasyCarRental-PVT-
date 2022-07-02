package lk.easyCarRental.spring.repo;

import lk.easyCarRental.spring.config.JPAConfig;
import lk.easyCarRental.spring.dto.DriverDTO;
import lk.easyCarRental.spring.entity.Driver;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;
import java.util.Optional;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 10:16 AM
 * @Project_Name : easycarRental
 **/

@WebAppConfiguration
@ContextConfiguration(classes = {JPAConfig.class})
@ExtendWith(SpringExtension.class)
class DriverRepoTest {

    @Autowired
    DriverRepo driverRepo;

    @Test
    public void saveDriver() {
        Driver driver1 = new Driver("D001", "Dasun", "Panadura", 1000.00, 50, "200005603230", "0768831973", 5, "V001");
        driverRepo.save(driver1);

    }

    @Test
    public void getAllDrivers() {
        List<Driver> all = driverRepo.findAll();
        for (Driver driver : all) {
            System.out.println(driver.toString());
        }
    }

    @Test
    public void searchDriver() {
        Optional<Driver> optional = driverRepo.findById("D001");
        boolean present = optional.isPresent();
        System.out.println(present);

        Driver driver = optional.get();
        System.out.println(driver);

    }

    @Test
    public void deleteDriver() {
        driverRepo.deleteById("D001");
    }

    @Test
    public void updateDriver() {
        if (driverRepo.existsById("D009")) {
            Driver driver1 = new Driver("D001", "Dasuni", "Panadura", 1000.00, 50, "200005603230", "0768831973", 5, "V001");
            driverRepo.save(driver1);
        } else {
            throw new RuntimeException("No Such Driver To Update");
        }

    }


    @Test
    public void testDTO() {
        DriverDTO driverDTO = new DriverDTO("D001", "Ramal", "Panadura", 1000.00, 50, "200005603230", "0768831973", 5, "V001");

    }


}


