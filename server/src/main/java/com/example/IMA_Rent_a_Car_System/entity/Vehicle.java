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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OwnerType ownerType;

    @Column(nullable = false)
    private Long ownerId;

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

    public enum OwnerType { COMPANY, SUPPLIER }
    public enum FuelType { PETROL, DIESEL }
}
