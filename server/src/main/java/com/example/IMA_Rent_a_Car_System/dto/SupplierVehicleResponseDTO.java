package com.example.IMA_Rent_a_Car_System.dto;

import lombok.Data;

@Data
public class SupplierVehicleResponseDTO {
    private Long id;
    private Long supplierId;
    private Long vehicleId;
    private Double startMileage;
    private Double endMileage;
    private Double mileageLimit;
    private Double monthlyRate;
    private Double dailyRate;
}
