package com.example.IMA_Rent_a_Car_System.repository;

import com.example.IMA_Rent_a_Car_System.entity.SupplierVehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupplierVehicleRepository extends JpaRepository<SupplierVehicle, Long> {
    List<SupplierVehicle> findBySupplierId(Long supplierId);
    List<SupplierVehicle> findByVehicleId(Long vehicleId);
}
