package com.example.IMA_Rent_a_Car_System.dto;

import com.example.IMA_Rent_a_Car_System.entity.Booking;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class BookingResponseDTO {
    private Long bookingId;
    private Long customerId;
    private Long vehicleId;
    private LocalDateTime startDatetime;
    private LocalDateTime endDatetime;
    private Double distance;
    private String customerNameWithNic;
    private String vehicleNameWithReg;
    private Double totalBill;
    private Double deposit;
    private Double advancePayment;
    private Double additionalCharges;
    private Booking.Status status;
}
