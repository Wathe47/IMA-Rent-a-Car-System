package com.example.IMA_Rent_a_Car_System.dto;

import com.example.IMA_Rent_a_Car_System.entity.Payment;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;

@Data
public class PaymentRequestDTO {
    @NotNull
    private Long bookingId;
    @NotNull
    private LocalDate paymentDate;
    @NotNull
    private Double amount;
    @NotNull
    private Payment.PaymentType paymentType;
}
