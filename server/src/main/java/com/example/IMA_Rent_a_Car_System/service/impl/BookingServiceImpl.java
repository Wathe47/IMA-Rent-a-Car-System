package com.example.IMA_Rent_a_Car_System.service.impl;

import com.example.IMA_Rent_a_Car_System.dto.BookingRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.BookingResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Booking;
import com.example.IMA_Rent_a_Car_System.exception.NotFoundException;
import com.example.IMA_Rent_a_Car_System.mapper.BookingMapper;
import com.example.IMA_Rent_a_Car_System.repository.BookingRepository;
import com.example.IMA_Rent_a_Car_System.repository.CustomerRepository;
import com.example.IMA_Rent_a_Car_System.repository.VehicleRepository;
import com.example.IMA_Rent_a_Car_System.service.BookingService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final BookingMapper bookingMapper;
    private final CustomerRepository customerRepository;
    private final VehicleRepository vehicleRepository;

    @Override
    @Transactional
    public BookingResponseDTO createBooking(BookingRequestDTO dto) {
    Booking booking = bookingMapper.toEntity(dto);
    booking.setCustomer(customerRepository.findById(dto.getCustomerId())
        .orElseThrow(() -> new NotFoundException("Customer not found with id: " + dto.getCustomerId())));
    booking.setVehicle(vehicleRepository.findById(dto.getVehicleId())
        .orElseThrow(() -> new NotFoundException("Vehicle not found with id: " + dto.getVehicleId())));
    booking = bookingRepository.save(booking);
    return bookingMapper.toDTO(booking);
    }

    @Override
    public BookingResponseDTO getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Booking not found with id: " + id));
        return bookingMapper.toDTO(booking);
    }

    @Override
    public Page<BookingResponseDTO> getAllBookings(Pageable pageable) {
        return bookingRepository.findAll(pageable).map(bookingMapper::toDTO);
    }

    @Override
    @Transactional
    public BookingResponseDTO updateBooking(Long id, BookingRequestDTO dto) {
    Booking booking = bookingRepository.findById(id)
        .orElseThrow(() -> new NotFoundException("Booking not found with id: " + id));
    booking.setCustomer(customerRepository.findById(dto.getCustomerId())
        .orElseThrow(() -> new NotFoundException("Customer not found with id: " + dto.getCustomerId())));
    booking.setVehicle(vehicleRepository.findById(dto.getVehicleId())
        .orElseThrow(() -> new NotFoundException("Vehicle not found with id: " + dto.getVehicleId())));
    booking.setStartDatetime(dto.getStartDatetime());
    booking.setEndDatetime(dto.getEndDatetime());
    booking.setEstimatedDistance(dto.getEstimatedDistance());
    booking.setRatePerUnit(dto.getRatePerUnit());
    booking.setTotalBill(dto.getTotalBill());
    booking.setDeposit(dto.getDeposit());
    booking.setAdvancePayment(dto.getAdvancePayment());
    booking.setAdditionalCharges(dto.getAdditionalCharges());
    booking.setStatus(dto.getStatus());
    booking = bookingRepository.save(booking);
    return bookingMapper.toDTO(booking);
    }

    @Override
    @Transactional
    public void deleteBooking(Long id) {
        if (!bookingRepository.existsById(id)) {
            throw new NotFoundException("Booking not found with id: " + id);
        }
        bookingRepository.deleteById(id);
    }

    @Override
    public List<BookingResponseDTO> getBookingsByStatus(String status) {
        return bookingRepository.findByStatus(Booking.Status.valueOf(status.toUpperCase()))
                .stream().map(bookingMapper::toDTO).collect(Collectors.toList());
    }

    @Override

    public List<BookingResponseDTO> getBookingsByCustomerId(Long customerId) {
        return bookingRepository.findByCustomer_CustomerId(customerId)
                .stream().map(bookingMapper::toDTO).collect(Collectors.toList());
    }

    @Override
    public List<BookingResponseDTO> getBookingsByVehicleId(Long vehicleId) {
        return bookingRepository.findByVehicle_VehicleId(vehicleId)
                .stream().map(bookingMapper::toDTO).collect(Collectors.toList());
    }
}
