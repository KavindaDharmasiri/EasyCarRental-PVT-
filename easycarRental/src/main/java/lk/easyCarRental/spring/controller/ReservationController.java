package lk.easyCarRental.spring.controller;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/3/2022
 * @Time_: 10:56 AM
 * @Project_Name : easycarRental
 **/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/Reservation")
@CrossOrigin(origins = "*")
public class ReservationController {
    @Autowired
    lk.easyCarRental.spring.service.ReservationService reservationService;

    @GetMapping(path = "/getAll" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil getAllReservations() {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", reservationService.getAllReservations());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(path = "/save" , produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil saveReservation(@RequestBody lk.easyCarRental.spring.dto.ReservationDTO reservation) {
        reservationService.saveReservation(reservation);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Save", null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil updateReservation(@RequestBody lk.easyCarRental.spring.dto.ReservationDTO reservation) {
        reservationService.updateReservation(reservation);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil deleteReservation(@RequestParam String id) {
        reservationService.deleteReservation(id);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Deleted", null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil searchReservation(@PathVariable String id) {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", reservationService.searchReservation(id));
    }

}

