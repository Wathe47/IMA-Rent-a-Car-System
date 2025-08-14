package com.example.IMA_Rent_a_Car_System.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "booking")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(nullable = false)
    private Long customerId;

    @Column(nullable = false)
    private Long vehicleId;

    @Column(nullable = false)
    private LocalDateTime startDatetime;

    @Column(nullable = false)
    private LocalDateTime endDatetime;

    @Column(nullable = false)
    private Double estimatedDistance;

    @Column(nullable = false)
    private Double ratePerUnit;

    @Column(nullable = false)
    private Double totalBill;

    @Column(nullable = false)
    private Double deposit;

    @Column(nullable = false)
    private Double advancePayment;

    @Column(nullable = false)
    private Double additionalCharges;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    public enum Status {
        BOOKED, ONGOING, COMPLETED, CANCELLED
    }
}
