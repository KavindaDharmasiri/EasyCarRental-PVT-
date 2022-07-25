package lk.easyCarRental.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 8:24 PM
 * @Project_Name : easycarRental
 **/

@RestController
@RequestMapping("api/v1/Rent")
@CrossOrigin(origins = "*")
public class RentController {
    @Autowired
    lk.easyCarRental.spring.service.RentService rentService;

    @GetMapping(path = "/getAll" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil getAllRents() {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", rentService.getAllRents());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(path = "/save" , produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil saveRent(@RequestBody lk.easyCarRental.spring.dto.RentDTO rent) {
        rentService.saveRent(rent);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Save", null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil updateRent(@RequestBody lk.easyCarRental.spring.dto.RentDTO rent) {
        rentService.updateRent(rent);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil deleteRent(@RequestParam String id) {
        rentService.deleteRent(id);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Deleted", null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil searchRent(@PathVariable String id) {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", rentService.searchRent(id));
    }

}
