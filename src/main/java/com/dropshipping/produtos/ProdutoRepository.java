package com.dropshipping.produtos;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.dropshipping.fornecedores.Fornecedor;

public interface ProdutoRepository extends JpaRepository<Produto, Integer>{
	@Query("Select pr from Produto pr where pr.nome like %:nome% and pr.descricao like %:descricao% "
			+ " and pr.marca like %:marca% ")
	Page<Produto> findByFiltro(@Param("nome") String nome, @Param("descricao") String descricao, 
			@Param("marca") String marca, Pageable pageable);
	
	Page<Produto> findByFornecedor(Fornecedor fornecedor, Pageable pageable);

	List<Produto> findByFornecedor(Fornecedor fornecedor);
}
