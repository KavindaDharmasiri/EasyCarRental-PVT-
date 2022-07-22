package lk.easyCarRental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 12:38 PM
 * @Project_Name : easycarRental
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserDTO {
    private String id;
    private String name;
    private String address;
    private int age;
    private String nic;
    private String contact;
    private String password;
    private String type;
}