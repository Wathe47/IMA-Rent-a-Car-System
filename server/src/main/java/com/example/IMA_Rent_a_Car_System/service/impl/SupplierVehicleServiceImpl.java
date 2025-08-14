package com.example.IMA_Rent_a_Car_System.service.impl;

import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.SupplierVehicle;
import com.example.IMA_Rent_a_Car_System.exception.NotFoundException;
import com.example.IMA_Rent_a_Car_System.mapper.SupplierVehicleMapper;
import com.example.IMA_Rent_a_Car_System.repository.SupplierVehicleRepository;
import com.example.IMA_Rent_a_Car_System.service.SupplierVehicleService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SupplierVehicleServiceImpl implements SupplierVehicleService {
    private final SupplierVehicleRepository repository;
    private final SupplierVehicleMapper mapper;

    @Override
    @Transactional
    public SupplierVehicleResponseDTO createSupplierVehicle(SupplierVehicleRequestDTO dto) {
        SupplierVehicle entity = mapper.toEntity(dto);
        entity = repository.save(entity);
        return mapper.toDTO(entity);
    }

    @Override
    public SupplierVehicleResponseDTO getSupplierVehicleById(Long id) {
        SupplierVehicle entity = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("SupplierVehicle not found with id: " + id));
        return mapper.toDTO(entity);
    }

    @Override
    public Page<SupplierVehicleResponseDTO> getAllSupplierVehicles(Pageable pageable) {
        return repository.findAll(pageable).map(mapper::toDTO);
    }

    @Override
    @Transactional
    public SupplierVehicleResponseDTO updateSupplierVehicle(Long id, SupplierVehicleRequestDTO dto) {
        SupplierVehicle entity = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("SupplierVehicle not found with id: " + id));
        entity.setSupplierId(dto.getSupplierId());
        entity.setVehicleId(dto.getVehicleId());
        entity.setStartMileage(dto.getStartMileage());
        entity.setEndMileage(dto.getEndMileage());
        entity.setMileageLimit(dto.getMileageLimit());
        entity.setMonthlyRate(dto.getMonthlyRate());
        entity.setDailyRate(dto.getDailyRate());
        entity = repository.save(entity);
        return mapper.toDTO(entity);
    }

    @Override
    @Transactional
    public void deleteSupplierVehicle(Long id) {
        if (!repository.existsById(id)) {
            throw new NotFoundException("SupplierVehicle not found with id: " + id);
        }
        repository.deleteById(id);
    }

    @Override
    public List<SupplierVehicleResponseDTO> getBySupplierId(Long supplierId) {
        return repository.findBySupplierId(supplierId).stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    @Override
    public List<SupplierVehicleResponseDTO> getByVehicleId(Long vehicleId) {
        return repository.findByVehicleId(vehicleId).stream().map(mapper::toDTO).collect(Collectors.toList());
    }
}
