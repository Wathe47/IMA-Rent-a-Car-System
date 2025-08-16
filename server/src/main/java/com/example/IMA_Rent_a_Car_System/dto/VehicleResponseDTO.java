package com.example.IMA_Rent_a_Car_System.dto;

import com.example.IMA_Rent_a_Car_System.entity.Vehicle;
import lombok.Data;

@Data
public class VehicleResponseDTO {
    private Long vehicleId;
    private String type;
    private Vehicle.OwnerType ownerType;
    private Long supplierId;
    private String registrationNo;
    private String manufacture;
    private String model;
    private Vehicle.FuelType fuelType;
    private int seats;
    private double dailyRate;
    private double extraKmRate;
}
