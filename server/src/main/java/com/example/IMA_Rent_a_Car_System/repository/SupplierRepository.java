package com.example.IMA_Rent_a_Car_System.repository;

import com.example.IMA_Rent_a_Car_System.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
    Optional<Supplier> findByNic(String nic);
    boolean existsByNic(String nic);
}
