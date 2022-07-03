package lk.easyCarRental.spring.service.impl;

import lk.easyCarRental.spring.dto.ReservationDTO;
import lk.easyCarRental.spring.entity.Reservation;
import lk.easyCarRental.spring.repo.ReservationRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 7/3/2022
 * @Time_: 11:00 AM
 * @Project_Name : easycarRental
 **/

@Service
@Transactional
public class ReservationServiceImpl implements lk.easyCarRental.spring.service.ReservationService {

    @Autowired
    private ReservationRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveReservation(ReservationDTO dto) {

        if (!repo.existsById(dto.getPaymentId())) {
            repo.save(mapper.map(dto, Reservation.class));
        } else {
            throw new RuntimeException("Reservation Already Exist..!");
        }
    }

    @Override
    public void deleteReservation(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the Payment ID.. No Such Reservation..!");
        }
    }

    @Override
    public void updateReservation(ReservationDTO dto) {
        if (repo.existsById(dto.getPaymentId())) {
            repo.save(mapper.map(dto, Reservation.class));
        } else {
            throw new RuntimeException("No Such Reservation To Update..! Please Check the ID..!");
        }
    }

    @Override
    public ReservationDTO searchReservation(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), ReservationDTO.class);
        } else {
            throw new RuntimeException("No Reservation For " + id + " ..!");
        }
    }

    @Override
    public List<ReservationDTO> getAllReservations() {
        return mapper.map(repo.findAll(), new TypeToken<List<Reservation>>() {
        }.getType());
    }
}
