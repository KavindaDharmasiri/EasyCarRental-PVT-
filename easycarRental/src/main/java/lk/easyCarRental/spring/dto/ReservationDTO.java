package lk.easyCarRental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/3/2022
 * @Time_: 10:55 AM
 * @Project_Name : easycarRental
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ReservationDTO {
    private String driverId;
    private String vehicleRegistrationNo;
    private String paymentId;
    private double total;
    private String type;
    private String releventDate;
}
