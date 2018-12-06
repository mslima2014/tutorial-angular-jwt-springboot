/*
 *  Petrobras Distribuidora S.A.
 *  Todos os direitos reservados.
 *  Copyright (C) 2018 bq4d
 */
package br.lab.tutorial.server.repository;

import br.lab.tutorial.server.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author bq4d
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
