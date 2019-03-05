package com.dropshipping.fornecedores;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface FornecedorRepository extends JpaRepository<Fornecedor, Integer>{
	List<Fornecedor> findByCnpj(String cnpj);

	@Query("Select f from Fornecedor f where f.email like :email and f.senha like :senha")
	Optional<Fornecedor> login(String email, String senha);

	Optional<Fornecedor> findByEmail(String email);
	
}
