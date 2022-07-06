package lk.easyCarRental.spring.service;

import lk.easyCarRental.spring.dto.CarImageDTO;

import java.util.List;

public interface CarImageService {
    void saveCarImage(CarImageDTO dto);

    void deleteCarImage(String id);

    void updateCarImage(CarImageDTO dto);

    CarImageDTO searchCarImage(String id);

    List<CarImageDTO> getAllCarImages();
}
