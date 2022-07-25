package lk.easyCarRental.spring.controller;

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
 * @Date_: 6/30/2022
 * @Time_: 8:16 PM
 * @Project_Name : easycarRental
 **/

@RestController
@RequestMapping("api/v1/driver")
@CrossOrigin(origins = "*")
public class DriverController {

    private static final ArrayList<String> allImages = new ArrayList<>();
    String temp;


    @Autowired
    lk.easyCarRental.spring.service.DriverService driverService;

    @GetMapping(path = "/getAll" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil getAllDrivers() {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", driverService.getAllDrivers());
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

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(path = "/save",produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil saveDriver(@RequestBody lk.easyCarRental.spring.dto.DriverDTO driver) {
        driver.setNic(temp);
        driverService.saveDriver(driver);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Save", null);
    }


    @PutMapping(path = "/edit",produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil updateDriver(@RequestBody lk.easyCarRental.spring.dto.DriverDTO driver) {
        driver.setNic(temp);
        driverService.updateDriver(driver);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil deleteDriver(@RequestParam String id) {
        driverService.deleteDriver(id);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Deleted", null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil searchDriver(@PathVariable String id) {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", driverService.searchDriver(id));
    }


}

