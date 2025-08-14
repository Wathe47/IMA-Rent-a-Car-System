package com.example.IMA_Rent_a_Car_System.dto;

import com.example.IMA_Rent_a_Car_System.entity.Booking;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class BookingRequestDTO {
    @NotNull
    private Long customerId;
    @NotNull
    private Long vehicleId;
    @NotNull
    private LocalDateTime startDatetime;
    @NotNull
    private LocalDateTime endDatetime;
    @NotNull
    private Double estimatedDistance;
    @NotNull
    private Double ratePerUnit;
    @NotNull
    private Double totalBill;
    @NotNull
    private Double deposit;
    @NotNull
    private Double advancePayment;
    @NotNull
    private Double additionalCharges;
    @NotNull
    private Booking.Status status;
}
