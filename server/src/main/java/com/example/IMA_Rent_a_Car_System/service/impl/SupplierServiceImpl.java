package com.example.IMA_Rent_a_Car_System.service.impl;

import com.example.IMA_Rent_a_Car_System.dto.SupplierRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.SupplierResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Supplier;
import com.example.IMA_Rent_a_Car_System.exception.NotFoundException;
import com.example.IMA_Rent_a_Car_System.mapper.SupplierMapper;
import com.example.IMA_Rent_a_Car_System.repository.SupplierRepository;
import com.example.IMA_Rent_a_Car_System.service.SupplierService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SupplierServiceImpl implements SupplierService {
    private final SupplierRepository supplierRepository;
    private final SupplierMapper supplierMapper;

    @Override
    @Transactional
    public SupplierResponseDTO createSupplier(SupplierRequestDTO dto) {
        Supplier supplier = supplierMapper.toEntity(dto);
        supplier = supplierRepository.save(supplier);
        return supplierMapper.toDTO(supplier);
    }

    @Override
    public SupplierResponseDTO getSupplierById(Long id) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Supplier not found with id: " + id));
        return supplierMapper.toDTO(supplier);
    }

    @Override
    public Page<SupplierResponseDTO> getAllSuppliers(Pageable pageable) {
        return supplierRepository.findAll(pageable).map(supplierMapper::toDTO);
    }

    @Override
    @Transactional
    public SupplierResponseDTO updateSupplier(Long id, SupplierRequestDTO dto) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Supplier not found with id: " + id));
        supplier.setName(dto.getName());
        supplier.setNic(dto.getNic());
        supplier.setAddress(dto.getAddress());
        supplier.setPhone(dto.getPhone());
        supplier = supplierRepository.save(supplier);
        return supplierMapper.toDTO(supplier);
    }

    @Override
    @Transactional
    public void deleteSupplier(Long id) {
        if (!supplierRepository.existsById(id)) {
            throw new NotFoundException("Supplier not found with id: " + id);
        }
        supplierRepository.deleteById(id);
    }
}
