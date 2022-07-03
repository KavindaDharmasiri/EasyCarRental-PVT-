package lk.easyCarRental.spring.service.impl;

import lk.easyCarRental.spring.dto.DriverDTO;
import lk.easyCarRental.spring.dto.UserDTO;
import lk.easyCarRental.spring.entity.User;
import lk.easyCarRental.spring.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 12:36 PM
 * @Project_Name : easycarRental
 **/

@Service
@Transactional
public class UserServiceImpl implements lk.easyCarRental.spring.service.UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveUser(UserDTO dto) {
        if (!repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, User.class));
        } else {
            throw new RuntimeException("Customer Already Exist..!");
        }

    }

    @Override
    public void deleteUser(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the Customer ID.. No Such Customer..!");
        }

    }

    @Override
    public void updateUser(UserDTO dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, User.class));
        } else {
            throw new RuntimeException("No Such Customer To Update..! Please Check the ID..!");
        }

    }

    @Override
    public UserDTO searchUser(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), UserDTO.class);
        } else {
            throw new RuntimeException("No Customer For " + id + " ..!");
        }
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDTO>>() {
        }.getType());
    }
}

