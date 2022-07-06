package lk.easyCarRental.spring.service.impl;

import lk.easyCarRental.spring.dto.CarImageDTO;
import lk.easyCarRental.spring.entity.CarImage;
import lk.easyCarRental.spring.repo.CarImageRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/6/2022
 * @Time_: 8:53 PM
 * @Project_Name : easycarRental
 **/

@Service
@Transactional
public class CarImageServiceImpl implements lk.easyCarRental.spring.service.CarImageService {

    @Autowired
    private CarImageRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCarImage(CarImageDTO dto) {
        if (!repo.existsById(dto.getRegistrationNumber())) {
            repo.save(mapper.map(dto, CarImage.class));
        } else {
            throw new RuntimeException("Car Already Exist..!");
        }
    }

    @Override
    public void deleteCarImage(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the Car Registration number.. No Such Car..!");
        }
    }

    @Override
    public void updateCarImage(CarImageDTO dto) {
        if (repo.existsById(dto.getRegistrationNumber())) {
            repo.save(mapper.map(dto, CarImage.class));
        } else {
            throw new RuntimeException("No Such Car To Update..! Please Check the Registration number..!");
        }
    }

    @Override
    public CarImageDTO searchCarImage(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), CarImageDTO.class);
        } else {
            throw new RuntimeException("No Car For " + id + " ..!");
        }
    }

    @Override
    public List<CarImageDTO> getAllCarImages() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarImageDTO>>() {
        }.getType());
    }
}
