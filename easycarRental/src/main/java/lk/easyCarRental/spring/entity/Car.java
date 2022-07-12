package lk.easyCarRental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
    private byte[] image;

}
