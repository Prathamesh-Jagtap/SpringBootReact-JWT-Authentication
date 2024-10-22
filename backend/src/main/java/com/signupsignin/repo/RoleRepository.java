package com.signupsignin.repo;

import com.signupsignin.Entity.ERole;
import com.signupsignin.Entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}

