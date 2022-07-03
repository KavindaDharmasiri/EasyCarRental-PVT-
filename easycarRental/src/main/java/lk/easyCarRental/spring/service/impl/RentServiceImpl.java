package lk.easyCarRental.spring.service.impl;

import lk.easyCarRental.spring.dto.RentDTO;
import lk.easyCarRental.spring.entity.Rent;
import lk.easyCarRental.spring.repo.RentRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 8:28 PM
 * @Project_Name : easycarRental
 **/

@Service
@Transactional
public class RentServiceImpl implements lk.easyCarRental.spring.service.RentService {

    @Autowired
    private RentRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRent(RentDTO dto) {

        if (!repo.existsById(dto.getPaymentId())) {
            repo.save(mapper.map(dto, Rent.class));
        } else {
            throw new RuntimeException("Rent Already Exist..!");
        }
    }

    @Override
    public void deleteRent(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the Payment ID.. No Such Rent..!");
        }
    }

    @Override
    public void updateRent(RentDTO dto) {
        if (repo.existsById(dto.getPaymentId())) {
            repo.save(mapper.map(dto, Rent.class));
        } else {
            throw new RuntimeException("No Such Rent To Update..! Please Check the ID..!");
        }
    }

    @Override
    public RentDTO searchRent(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), RentDTO.class);
        } else {
            throw new RuntimeException("No Rent For " + id + " ..!");
        }
    }

    @Override
    public List<RentDTO> getAllRents() {
        return mapper.map(repo.findAll(), new TypeToken<List<RentDTO>>() {
        }.getType());
    }
}
