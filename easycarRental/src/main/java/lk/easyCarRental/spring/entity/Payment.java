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
 * @Time_: 8:00 PM
 * @Project_Name : easycarRental
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Payment {
    @Id
    private String paymentId;
    private String vehicleRegistrationNo;
    private double total;
    private double downPayment;
    private double onGoingPayment;
    private String releventDate;
    private String success;
}
