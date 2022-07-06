package lk.easyCarRental.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/6/2022
 * @Time_: 8:49 PM
 * @Project_Name : easycarRental
 **/

@RestController
@RequestMapping("api/v1/carImage")
@CrossOrigin
public class CarImageController {
    @Autowired
    lk.easyCarRental.spring.service.CarImageService carImageService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil getAllCarImages() {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", carImageService.getAllCarImages());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil saveCarImage(@ModelAttribute lk.easyCarRental.spring.dto.CarImageDTO car) {
        carImageService.saveCarImage(car);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Save", null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil updateCarIamge(@RequestBody lk.easyCarRental.spring.dto.CarImageDTO car) {
        carImageService.updateCarImage(car);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil deleteCarImage(@RequestParam String id) {
        carImageService.deleteCarImage(id);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Deleted", null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil searchCarImage(@PathVariable String id) {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", carImageService.searchCarImage(id));
    }

}
