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
 * @Date_: 6/30/2022
 * @Time_: 8:19 PM
 * @Project_Name : easycarRental
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Driver {
    @Id
    private String id;
    private String name;
    private String email;
    private String address;
    private double salary;
    private int age;
    private String nic;
    private String contact;
    private int experience;
    private String vehicleRegisterNo;

}
