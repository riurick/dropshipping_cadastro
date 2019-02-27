package com.dropshipping.imagens;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dropshipping.produtos.Produto;

public interface ImagemRepository extends JpaRepository<Imagem, Integer>{

	List<Imagem> findByProduto(Produto produto);

}
