package com.dropshipping.fornecedores;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;

@Entity
public class Fornecedor {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@NotNull
	@Max(14)
	private String cnpj;
	
	@NotNull
	@Max(255)
	private String razaoSocial;
	
	@NotNull
	@Max(255)
	private String nomeFantasia;
}
