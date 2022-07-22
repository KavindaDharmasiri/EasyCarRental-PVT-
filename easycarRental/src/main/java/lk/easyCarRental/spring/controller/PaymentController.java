package lk.easyCarRental.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 8:04 PM
 * @Project_Name : easycarRental
 **/

@RestController
@RequestMapping("api/v1/payment")
@CrossOrigin(origins = "*")
public class PaymentController {
    @Autowired
    lk.easyCarRental.spring.service.PaymentService paymentService;

    @GetMapping(path = "/getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil getAllPayments() {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", paymentService.getAllPayments());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil savePayment(@ModelAttribute lk.easyCarRental.spring.dto.PaymentDTO payment) {
        paymentService.savePayment(payment);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Save", null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil updatePayment(@RequestBody lk.easyCarRental.spring.dto.PaymentDTO payment) {
        paymentService.updatePayment(payment);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil deletePayment(@RequestParam String id) {
        paymentService.deletePayment(id);
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Deleted", null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public lk.easyCarRental.spring.util.ResponseUtil searchPayment(@PathVariable String id) {
        return new lk.easyCarRental.spring.util.ResponseUtil(200, "Ok", paymentService.searchPayment(id));
    }


}


