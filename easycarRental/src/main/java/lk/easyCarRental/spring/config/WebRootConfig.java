package lk.easyCarRental.spring.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 6/30/2022
 * @Time_: 8:14 PM
 * @Project_Name : easycarRental
 **/

@Configuration
@Import(JPAConfig.class)
public class WebRootConfig {

}


