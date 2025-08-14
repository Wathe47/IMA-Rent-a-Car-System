package com.example.IMA_Rent_a_Car_System.service;

import com.example.IMA_Rent_a_Car_System.dto.VehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.VehicleResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface VehicleService {
    VehicleResponseDTO createVehicle(VehicleRequestDTO dto);
    VehicleResponseDTO getVehicleById(Long id);
    Page<VehicleResponseDTO> getAllVehicles(Pageable pageable);
    VehicleResponseDTO updateVehicle(Long id, VehicleRequestDTO dto);
    void deleteVehicle(Long id);
    Page<VehicleResponseDTO> getAvailableVehicles(Pageable pageable);
}
