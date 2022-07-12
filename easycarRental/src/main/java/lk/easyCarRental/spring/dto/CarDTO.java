package lk.easyCarRental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
    private byte[] image;
}
