package lk.easyCarRental.spring.service;

import lk.easyCarRental.spring.dto.UserDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    void saveUser(UserDTO dto);

    void deleteUser(String id);

    void updateUser(UserDTO dto);

    UserDTO searchUser(String id);

    List<UserDTO> getAllUsers();

}
