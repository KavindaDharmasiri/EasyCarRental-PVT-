package lk.easyCarRental.spring.controller;

import lk.easyCarRental.spring.dto.UserDTO;
import lk.easyCarRental.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 12:48 PM
 * @Project_Name : easycarRental
 **/

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin(origins = "*")
public class UserController {

    private static final ArrayList<String> allImages = new ArrayList<>();
    String temp;

    @Autowired
    UserService userService;

    @GetMapping(path = "/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil getAllUsers() {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", userService.getAllUsers());
    }


    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(path = "/save", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil saveUser(@RequestBody lk.easyCarRental.spring.dto.UserDTO user) {



        UserDTO userDTO = new UserDTO(user.getId(),user.getName(),user.getAddress(),user.getAge(),temp,user.getContact(),user.getPassword(),user.getType());
        temp = "";
        userService.saveUser(userDTO);

        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Save", null);
    }

    @PostMapping(path = "/img", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity uploadFileWithSpringWay(@RequestPart("myFile") MultipartFile myFile) {

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));


            allImages.add("uploads/" + myFile.getOriginalFilename());
            temp = "uploads/" + myFile.getOriginalFilename();
            System.out.println(allImages.get(0));
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(path = "/editUser", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil updateUser(@RequestBody lk.easyCarRental.spring.dto.UserDTO user) {
        userService.updateUser(user);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil deleteUser(@RequestParam String id) {
        userService.deleteUser(id);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Deleted", null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil searchUser(@PathVariable String id) {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", userService.searchUser(id));
    }


}
