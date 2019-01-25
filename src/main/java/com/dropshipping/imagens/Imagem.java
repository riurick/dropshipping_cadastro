package com.dropshipping.imagens;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.dropshipping.produtos.Produto;
import com.dropshipping.propagandas.Propaganda;

@Entity
public class Imagem {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@Size(max = 32)
	private String nome;
	
	@NotNull
	@Size(max = 64)
	private String arquivo;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="produto_id")
	@Fetch(FetchMode.JOIN)
	private Produto produto;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="propaganda_id")
	@Fetch(FetchMode.JOIN)
	private Propaganda propaganda;
	
}
