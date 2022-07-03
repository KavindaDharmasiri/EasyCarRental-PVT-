package lk.easyCarRental.spring.service.impl;

import lk.easyCarRental.spring.dto.PaymentDTO;
import lk.easyCarRental.spring.entity.Payment;
import lk.easyCarRental.spring.repo.PaymentRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/1/2022
 * @Time_: 8:08 PM
 * @Project_Name : easycarRental
 **/

@Service
@Transactional
public class PaymentServiceImpl implements lk.easyCarRental.spring.service.PaymentService {

    @Autowired
    private PaymentRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void savePayment(PaymentDTO dto) {
        if (!repo.existsById(dto.getPaymentId())) {
            repo.save(mapper.map(dto, Payment.class));
        } else {
            throw new RuntimeException("Payment Already Exist..!");
        }
    }

    @Override
    public void deletePayment(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the Payment ID.. No Such Payment..!");
        }
    }

    @Override
    public void updatePayment(PaymentDTO dto) {
        if (repo.existsById(dto.getPaymentId())) {
            repo.save(mapper.map(dto, Payment.class));
        } else {
            throw new RuntimeException("No Such Payment To Update..! Please Check the ID..!");
        }
    }

    @Override
    public PaymentDTO searchPayment(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), PaymentDTO.class);
        } else {
            throw new RuntimeException("No Payment For " + id + " ..!");
        }
    }

    @Override
    public List<PaymentDTO> getAllPayments() {
        return mapper.map(repo.findAll(), new TypeToken<List<PaymentDTO>>() {
        }.getType());
    }
}
