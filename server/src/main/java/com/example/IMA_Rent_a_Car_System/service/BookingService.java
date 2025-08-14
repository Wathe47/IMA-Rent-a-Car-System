package com.example.IMA_Rent_a_Car_System.service;

import com.example.IMA_Rent_a_Car_System.dto.BookingRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.BookingResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BookingService {
    BookingResponseDTO createBooking(BookingRequestDTO dto);
    BookingResponseDTO getBookingById(Long id);
    Page<BookingResponseDTO> getAllBookings(Pageable pageable);
    BookingResponseDTO updateBooking(Long id, BookingRequestDTO dto);
    void deleteBooking(Long id);
    List<BookingResponseDTO> getBookingsByStatus(String status);
    List<BookingResponseDTO> getBookingsByCustomerId(Long customerId);
    List<BookingResponseDTO> getBookingsByVehicleId(Long vehicleId);
}
