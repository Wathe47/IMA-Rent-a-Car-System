package com.example.IMA_Rent_a_Car_System.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vehicle", uniqueConstraints = {@UniqueConstraint(columnNames = "registrationNo")})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;

    @Column(nullable = false)
    private String type;



    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "supplier_id", nullable = false)
    private Supplier supplier;


    @Column(nullable = false, unique = true)
    private String registrationNo;

    @Column(nullable = false)
    private String manufacture;

    @Column(nullable = false)
    private String model;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FuelType fuelType;

    @Column(nullable = false)
    private int seats;

    @Column(nullable = false)
    private double dailyRate;

    @Column(nullable = false)
    private double extraKmRate;


    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransmissionType transmissionType;

    public enum FuelType { PETROL, DIESEL }
    public enum TransmissionType { AUTO, MANUAL }
}
