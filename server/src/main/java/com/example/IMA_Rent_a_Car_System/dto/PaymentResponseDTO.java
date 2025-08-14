package com.example.IMA_Rent_a_Car_System.dto;

import com.example.IMA_Rent_a_Car_System.entity.Payment;
import lombok.Data;
import java.time.LocalDate;

@Data
public class PaymentResponseDTO {
    private Long paymentId;
    private Long bookingId;
    private LocalDate paymentDate;
    private Double amount;
    private Payment.PaymentType paymentType;
}
