package com.example.IMA_Rent_a_Car_System.controller;

import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleResponseDTO;
import com.example.IMA_Rent_a_Car_System.service.SupplierVehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/supplier-vehicles")
@RequiredArgsConstructor
public class SupplierVehicleController {
    private final SupplierVehicleService service;

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<SupplierVehicleResponseDTO> create(@Valid @RequestBody SupplierVehicleRequestDTO dto) {
        return new ResponseEntity<>(service.createSupplierVehicle(dto), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY', 'VIEWER')")
    public ResponseEntity<SupplierVehicleResponseDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getSupplierVehicleById(id));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY', 'VIEWER')")
    public ResponseEntity<Page<SupplierVehicleResponseDTO>> getAll(Pageable pageable) {
        return ResponseEntity.ok(service.getAllSupplierVehicles(pageable));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<SupplierVehicleResponseDTO> update(@PathVariable Long id, @Valid @RequestBody SupplierVehicleRequestDTO dto) {
        return ResponseEntity.ok(service.updateSupplierVehicle(id, dto));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteSupplierVehicle(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/by-supplier/{supplierId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY', 'VIEWER')")
    public ResponseEntity<List<SupplierVehicleResponseDTO>> getBySupplierId(@PathVariable Long supplierId) {
        return ResponseEntity.ok(service.getBySupplierId(supplierId));
    }

    @GetMapping("/by-vehicle/{vehicleId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY', 'VIEWER')")
    public ResponseEntity<List<SupplierVehicleResponseDTO>> getByVehicleId(@PathVariable Long vehicleId) {
        return ResponseEntity.ok(service.getByVehicleId(vehicleId));
    }
}
