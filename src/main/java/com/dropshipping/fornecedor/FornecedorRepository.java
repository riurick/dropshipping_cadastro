package com.dropshipping.fornecedor;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface FornecedorRepository extends JpaRepository<Fornecedor, Integer>{
	List<Fornecedor> findByCpf(String cpf);
	
	List<Fornecedor> findByEmail(String email);
}
