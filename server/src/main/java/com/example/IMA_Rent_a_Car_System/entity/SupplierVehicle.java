package com.example.IMA_Rent_a_Car_System.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "supplier_vehicle")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SupplierVehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long supplierId;

    @Column(nullable = false)
    private Long vehicleId;

    @Column(nullable = false)
    private double startMileage;

    @Column(nullable = false)
    private double endMileage;

    @Column(nullable = false)
    private double mileageLimit;

    @Column(nullable = false)
    private double monthlyRate;

    @Column(nullable = false)
    private double dailyRate;
}
