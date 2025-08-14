package com.example.IMA_Rent_a_Car_System.service;

import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface SupplierVehicleService {
    SupplierVehicleResponseDTO createSupplierVehicle(SupplierVehicleRequestDTO dto);
    SupplierVehicleResponseDTO getSupplierVehicleById(Long id);
    Page<SupplierVehicleResponseDTO> getAllSupplierVehicles(Pageable pageable);
    SupplierVehicleResponseDTO updateSupplierVehicle(Long id, SupplierVehicleRequestDTO dto);
    void deleteSupplierVehicle(Long id);
    List<SupplierVehicleResponseDTO> getBySupplierId(Long supplierId);
    List<SupplierVehicleResponseDTO> getByVehicleId(Long vehicleId);
}
