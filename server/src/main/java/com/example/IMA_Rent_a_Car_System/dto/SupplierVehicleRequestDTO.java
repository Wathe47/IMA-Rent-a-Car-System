package com.example.IMA_Rent_a_Car_System.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SupplierVehicleRequestDTO {
    @NotNull
    private Long supplierId;
    @NotNull
    private Long vehicleId;
    @NotNull
    private Double startMileage;
    @NotNull
    private Double endMileage;
    @NotNull
    private Double mileageLimit;
    @NotNull
    private Double monthlyRate;
    @NotNull
    private Double dailyRate;
}
