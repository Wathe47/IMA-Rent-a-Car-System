
package com.example.IMA_Rent_a_Car_System.controller;
import org.springframework.security.access.prepost.PreAuthorize;

import com.example.IMA_Rent_a_Car_System.dto.VehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.VehicleResponseDTO;
import com.example.IMA_Rent_a_Car_System.service.VehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vehicles")
@RequiredArgsConstructor
public class VehicleController {
    private final VehicleService vehicleService;


    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<VehicleResponseDTO> createVehicle(@Valid @RequestBody VehicleRequestDTO dto) {
        return new ResponseEntity<>(vehicleService.createVehicle(dto), HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<VehicleResponseDTO> getVehicle(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleService.getVehicleById(id));
    }


    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<Page<VehicleResponseDTO>> getAllVehicles(Pageable pageable) {
        return ResponseEntity.ok(vehicleService.getAllVehicles(pageable));
    }


    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<VehicleResponseDTO> updateVehicle(@PathVariable Long id, @Valid @RequestBody VehicleRequestDTO dto) {
        return ResponseEntity.ok(vehicleService.updateVehicle(id, dto));
    }


    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/available")
    @PreAuthorize("hasAnyRole('ADMIN', 'DATA_ENTRY')")
    public ResponseEntity<Page<VehicleResponseDTO>> getAvailableVehicles(Pageable pageable) {
        return ResponseEntity.ok(vehicleService.getAvailableVehicles(pageable));
    }
}
