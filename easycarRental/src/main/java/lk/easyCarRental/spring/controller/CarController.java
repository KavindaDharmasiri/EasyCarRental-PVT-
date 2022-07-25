package lk.easyCarRental.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/6/2022
 * @Time_: 8:34 PM
 * @Project_Name : easycarRental
 **/

@RestController
@RequestMapping("api/v1/car")
@CrossOrigin(origins = "*")
public class CarController {
    private static final ArrayList<String> allImages = new ArrayList<>();
    String tempOne;
    String tempTwo;
    String tempThree;
    String tempFour;

    @Autowired
    lk.easyCarRental.spring.service.CarService carService;

    @GetMapping(path = "/getAll" ,produces = MediaType.APPLICATION_JSON_VALUE )
    public lk.easyCarRental.spring.util.ResponseUtil getAllCars() {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", carService.getAllCars());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(path = "/save",produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil saveCar( @RequestBody lk.easyCarRental.spring.dto.CarDTO car) {
        car.setImage1(tempOne);
        car.setImage2(tempTwo);
        car.setImage3(tempThree);
        car.setImage4(tempFour);
        carService.saveCar(car);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Save", null);
    }


    @PutMapping(path = "/edit",produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil updateCar(@RequestBody lk.easyCarRental.spring.dto.CarDTO car) {
        car.setImage1(tempOne);
        car.setImage2(tempTwo);
        car.setImage3(tempThree);
        car.setImage4(tempFour);
        carService.updateCar(car);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil deleteCar(@RequestParam String id) {
        carService.deleteCar(id);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Deleted", null);
    }

    @GetMapping( path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil searchCar(@PathVariable String id) {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", carService.searchCar(id));
    }

    @PostMapping(path = "/imgOne", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity uploadFileWithSpringWayTwo(@RequestPart("myFile") MultipartFile myFile) {

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));


            allImages.add("uploads/" + myFile.getOriginalFilename());
            tempOne = "uploads/" + myFile.getOriginalFilename();
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

    @PostMapping(path = "/imgTwo", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity uploadFileWithSpringWayThree(@RequestPart("myFile") MultipartFile myFile) {

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));


            allImages.add("uploads/" + myFile.getOriginalFilename());
            tempTwo = "uploads/" + myFile.getOriginalFilename();
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

    @PostMapping(path = "/imgThree", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity uploadFileWithSpringWayFour(@RequestPart("myFile") MultipartFile myFile) {

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));


            allImages.add("uploads/" + myFile.getOriginalFilename());
            tempThree = "uploads/" + myFile.getOriginalFilename();
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

    @PostMapping(path = "/imgFour", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity uploadFileWithSpringWay(@RequestPart("myFile") MultipartFile myFile) {

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));


            allImages.add("uploads/" + myFile.getOriginalFilename());
            tempFour = "uploads/" + myFile.getOriginalFilename();
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

}


