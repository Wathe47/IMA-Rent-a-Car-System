package com.example.IMA_Rent_a_Car_System.dto;

import com.example.IMA_Rent_a_Car_System.entity.Vehicle;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class VehicleRequestDTO {
    @NotBlank
    private String type;

    @NotNull

    @NotNull
    private Long supplierId;

    @NotBlank
    private String registrationNo;

    @NotBlank
    private String manufacture;

    @NotBlank
    private String model;

    @NotNull
    private Vehicle.FuelType fuelType;

    @Min(1)
    private int seats;

    @DecimalMin("0.0")
    private double dailyRate;

    @DecimalMin("0.0")
    private double extraKmRate;

    @NotNull
    private Vehicle.TransmissionType transmissionType;

}
