package lk.easyCarRental.spring.service;


import lk.easyCarRental.spring.dto.CarDTO;

import java.util.List;

public interface CarService {
    void saveCar(CarDTO dto);

    void deleteCar(String id);

    void updateCar(CarDTO dto);

    CarDTO searchCar(String id);

    List<CarDTO> getAllCars();
}
