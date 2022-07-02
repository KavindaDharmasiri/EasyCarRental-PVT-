package lk.easyCarRental.spring.service.impl;

import lk.easyCarRental.spring.config.WebAppConfig;
import lk.easyCarRental.spring.dto.DriverDTO;
import lk.easyCarRental.spring.service.DriverService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 10:31 AM
 * @Project_Name : easycarRental
 **/

@WebAppConfiguration
@ContextConfiguration(classes = {WebAppConfig.class})
@ExtendWith(SpringExtension.class)
@Transactional
class DriverServiceImplTest {

    @Autowired
    DriverService driverService;

    public DriverDTO addOneDriver() {
        return new DriverDTO("D001", "Ramal", "Panadura", 1000.00, 50, "200005603230", "0768831973", 5, "V001");
    }

    public void addDrivers() {
        DriverDTO d1 = new DriverDTO("D001", "Ramal", "Panadura", 1000.00, 50, "200005603230", "0768831973", 5, "V001");
        driverService.saveDriver(d1);

    }


    @Test
    void saveDriver() {

        DriverDTO driverDTO = addOneDriver();
        assertDoesNotThrow(() -> {
            driverService.saveDriver(driverDTO);
        });

        DriverDTO driverDTO2 = addOneDriver();

        assertThrows(RuntimeException.class, () -> {
            driverService.saveDriver(driverDTO2);
        });

    }

    @Test
    void deleteDriver() {
        addDrivers();

        assertDoesNotThrow(() -> {
            driverService.deleteDriver("D001");
        });

        assertThrows(RuntimeException.class, () -> {
            driverService.deleteDriver("D016");
        });

    }

    @Test
    void updateDriver() {
        addDrivers();

        assertDoesNotThrow(() -> {
            driverService.updateDriver(new DriverDTO("D001", "Ramal", "Panadura", 1000.00, 50, "200005603230", "0768831973", 5, "V001"));
        });

        assertThrows(RuntimeException.class, () -> {
            driverService.updateDriver(new DriverDTO("D001", "Ramal", "Panadura", 1000.00, 50, "200005603230", "0768831973", 5, "V001"));
        });


    }

    @Test
    void searchDriver() {
        DriverDTO driver = addOneDriver();
        driverService.saveDriver(driver);

        DriverDTO d001 = driverService.searchDriver("D001");
        assertNotNull(d001);

        assertThrows(RuntimeException.class, () -> {
            DriverDTO d002 = driverService.searchDriver("D002");
        });
    }

    @Test
    void getAllDrivers() {

        addDrivers();

        List<DriverDTO> allDrivers = driverService.getAllDrivers();
        for (DriverDTO allDriver : allDrivers) {
            System.out.println(allDriver.toString());
        }


        assertNotNull(allDrivers);

    }
}
