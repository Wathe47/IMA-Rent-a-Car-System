package com.example.IMA_Rent_a_Car_System.service.impl;

import com.example.IMA_Rent_a_Car_System.dto.VehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.VehicleResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Vehicle;
import com.example.IMA_Rent_a_Car_System.exception.NotFoundException;
import com.example.IMA_Rent_a_Car_System.mapper.VehicleMapper;
import com.example.IMA_Rent_a_Car_System.repository.VehicleRepository;
import com.example.IMA_Rent_a_Car_System.repository.SupplierRepository;
import com.example.IMA_Rent_a_Car_System.service.VehicleService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VehicleServiceImpl implements VehicleService {
    private final VehicleRepository vehicleRepository;
    private final VehicleMapper vehicleMapper;
    private final SupplierRepository supplierRepository;

    @Override
    @Transactional
    public VehicleResponseDTO createVehicle(VehicleRequestDTO dto) {
        // Check for duplicate registration number
        if (vehicleRepository.existsByRegistrationNo(dto.getRegistrationNo())) {
            throw new IllegalArgumentException("A vehicle with registration number '" + dto.getRegistrationNo() + "' already exists.");
        }
        Vehicle vehicle = vehicleMapper.toEntity(dto);
        vehicle.setSupplier(supplierRepository.findById(dto.getSupplierId())
            .orElseThrow(() -> new NotFoundException("Supplier not found with id: " + dto.getSupplierId())));
        vehicle = vehicleRepository.save(vehicle);
        return vehicleMapper.toDTO(vehicle);
    }

    @Override
    public VehicleResponseDTO getVehicleById(Long id) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Vehicle not found with id: " + id));
        return vehicleMapper.toDTO(vehicle);
    }

    @Override
    public Page<VehicleResponseDTO> getAllVehicles(Pageable pageable) {
        return vehicleRepository.findAll(pageable).map(vehicleMapper::toDTO);
    }

    @Override
    @Transactional
    public VehicleResponseDTO updateVehicle(Long id, VehicleRequestDTO dto) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Vehicle not found with id: " + id));
        vehicle.setType(dto.getType());
        vehicle.setOwnerType(dto.getOwnerType());
        vehicle.setSupplier(supplierRepository.findById(dto.getSupplierId())
            .orElseThrow(() -> new NotFoundException("Supplier not found with id: " + dto.getSupplierId())));
        vehicle.setRegistrationNo(dto.getRegistrationNo());
        vehicle.setManufacture(dto.getManufacture());
        vehicle.setModel(dto.getModel());
        vehicle.setFuelType(dto.getFuelType());
        vehicle.setSeats(dto.getSeats());
        vehicle.setDailyRate(dto.getDailyRate());
        vehicle.setExtraKmRate(dto.getExtraKmRate());
        vehicle = vehicleRepository.save(vehicle);
        return vehicleMapper.toDTO(vehicle);
    }

    @Override
    @Transactional
    public void deleteVehicle(Long id) {
        if (!vehicleRepository.existsById(id)) {
            throw new NotFoundException("Vehicle not found with id: " + id);
        }
        vehicleRepository.deleteById(id);
    }

    @Override
    public Page<VehicleResponseDTO> getAvailableVehicles(Pageable pageable) {
        // Placeholder: implement logic to return only available vehicles
        return vehicleRepository.findAll(pageable).map(vehicleMapper::toDTO);
    }
}
