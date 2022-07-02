package lk.easyCarRental.spring.advisor;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 6/30/2022
 * @Time_: 8:15 PM
 * @Project_Name : easycarRental
 **/

@CrossOrigin
@RestControllerAdvice
public class AppWideExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({Exception.class})
    public lk.easyCarRental.spring.util.ResponseUtil exceptionHandler(Exception e) {
        return new lk.easyCarRental.spring.util.ResponseUtil(500, e.getMessage(), null);
    }

}

