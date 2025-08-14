package com.example.IMA_Rent_a_Car_System.mapper;

import com.example.IMA_Rent_a_Car_System.dto.BookingRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.BookingResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Booking;
import org.springframework.stereotype.Component;

@Component
public class BookingMapper {
    public Booking toEntity(BookingRequestDTO dto) {
        return Booking.builder()
                .customerId(dto.getCustomerId())
                .vehicleId(dto.getVehicleId())
                .startDatetime(dto.getStartDatetime())
                .endDatetime(dto.getEndDatetime())
                .estimatedDistance(dto.getEstimatedDistance())
                .ratePerUnit(dto.getRatePerUnit())
                .totalBill(dto.getTotalBill())
                .deposit(dto.getDeposit())
                .advancePayment(dto.getAdvancePayment())
                .additionalCharges(dto.getAdditionalCharges())
                .status(dto.getStatus())
                .build();
    }

    public BookingResponseDTO toDTO(Booking entity) {
        BookingResponseDTO dto = new BookingResponseDTO();
        dto.setBookingId(entity.getBookingId());
        dto.setCustomerId(entity.getCustomerId());
        dto.setVehicleId(entity.getVehicleId());
        dto.setStartDatetime(entity.getStartDatetime());
        dto.setEndDatetime(entity.getEndDatetime());
        dto.setEstimatedDistance(entity.getEstimatedDistance());
        dto.setRatePerUnit(entity.getRatePerUnit());
        dto.setTotalBill(entity.getTotalBill());
        dto.setDeposit(entity.getDeposit());
        dto.setAdvancePayment(entity.getAdvancePayment());
        dto.setAdditionalCharges(entity.getAdditionalCharges());
        dto.setStatus(entity.getStatus());
        return dto;
    }
}
