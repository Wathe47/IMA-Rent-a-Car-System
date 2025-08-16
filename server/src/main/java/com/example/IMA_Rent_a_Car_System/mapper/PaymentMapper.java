package com.example.IMA_Rent_a_Car_System.mapper;

import com.example.IMA_Rent_a_Car_System.dto.PaymentRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.PaymentResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Payment;
import org.springframework.stereotype.Component;

@Component
public class PaymentMapper {
    public Payment toEntity(PaymentRequestDTO dto) {
        return Payment.builder()
                // .booking(booking) // set in service
                .paymentDate(dto.getPaymentDate())
                .amount(dto.getAmount())
                .paymentType(dto.getPaymentType())
                .build();
    }

    public PaymentResponseDTO toDTO(Payment entity) {
        PaymentResponseDTO dto = new PaymentResponseDTO();
        dto.setPaymentId(entity.getPaymentId());
        dto.setBookingId(entity.getBooking() != null ? entity.getBooking().getBookingId() : null);
        dto.setPaymentDate(entity.getPaymentDate());
        dto.setAmount(entity.getAmount());
        dto.setPaymentType(entity.getPaymentType());
        return dto;
    }
}
