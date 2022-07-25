package lk.easyCarRental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 8:06 PM
 * @Project_Name : easycarRental
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentId;
    private String userId;
    private String vehicleRegistrationNo;
    private double total;
    private String date;
}
