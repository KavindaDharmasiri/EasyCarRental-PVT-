package lk.easyCarRental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 7:34 PM
 * @Project_Name : easycarRental
 **/


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Car {
    @Id
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
