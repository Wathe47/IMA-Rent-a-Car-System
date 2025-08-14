package com.example.IMA_Rent_a_Car_System.service;

import com.example.IMA_Rent_a_Car_System.dto.PaymentRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.PaymentResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PaymentService {
    PaymentResponseDTO createPayment(PaymentRequestDTO dto);
    PaymentResponseDTO getPaymentById(Long id);
    Page<PaymentResponseDTO> getAllPayments(Pageable pageable);
    PaymentResponseDTO updatePayment(Long id, PaymentRequestDTO dto);
    void deletePayment(Long id);
    List<PaymentResponseDTO> getPaymentsByBookingId(Long bookingId);
}
