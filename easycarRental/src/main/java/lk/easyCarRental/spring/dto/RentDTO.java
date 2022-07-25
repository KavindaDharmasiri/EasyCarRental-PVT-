package lk.easyCarRental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 8:23 PM
 * @Project_Name : easycarRental
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentDTO {
    private String userId;
    private String vehicleRegistrationNo;
    private String paymentId;
    private double total;
    private String type;
    private String date;
}
