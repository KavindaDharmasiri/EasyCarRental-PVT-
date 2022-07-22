package lk.easyCarRental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/6/2022
 * @Time_: 8:33 PM
 * @Project_Name : easycarRental
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarDTO {
    private String registrationNo;
    private String colour;
    private String type;
    private String brand;
    private String transmission;
    private int noOfPassenger;
    private double priceForRent;
    private String fuel;
    private String image1;
    private String image2;
    private String image3;
    private String image4;
}
