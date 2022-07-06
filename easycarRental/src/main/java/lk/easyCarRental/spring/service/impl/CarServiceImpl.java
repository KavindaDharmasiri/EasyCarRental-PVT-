package lk.easyCarRental.spring.service.impl;

import lk.easyCarRental.spring.dto.CarDTO;
import lk.easyCarRental.spring.dto.DriverDTO;
import lk.easyCarRental.spring.entity.Car;
import lk.easyCarRental.spring.entity.Driver;
import lk.easyCarRental.spring.repo.CarRepo;
import lk.easyCarRental.spring.repo.DriverRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/6/2022
 * @Time_: 8:38 PM
 * @Project_Name : easycarRental
 **/

@Service
@Transactional
public class CarServiceImpl  implements lk.easyCarRental.spring.service.CarService{

    @Autowired
    private CarRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCar(CarDTO dto) {
        if (!repo.existsById(dto.getRegistrationNo())) {
            repo.save(mapper.map(dto, Car.class));
        } else {
            throw new RuntimeException("Car Already Exist..!");
        }
    }

    @Override
    public void deleteCar(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the Car Registration number.. No Such Car..!");
        }
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (repo.existsById(dto.getRegistrationNo())) {
            repo.save(mapper.map(dto, Car.class));
        } else {
            throw new RuntimeException("No Such Car To Update..! Please Check the Registration number..!");
        }
    }

    @Override
    public CarDTO searchCar(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), CarDTO.class);
        } else {
            throw new RuntimeException("No Car For " + id + " ..!");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarDTO>>() {
        }.getType());
    }
}
