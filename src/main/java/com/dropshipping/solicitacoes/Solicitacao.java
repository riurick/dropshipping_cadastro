package com.dropshipping.solicitacoes;

import java.util.Date;

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

import com.dropshipping.clientes.Cliente;
import com.dropshipping.statussolicitacoes.StatusSolicitacao;
import com.dropshipping.vendedores.Vendedor;

@Entity
public class Solicitacao {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@NotNull
	@Size(max = 512)
	private String descricao;
	
	@NotNull
	private Date dtsolicitacao;
	
	@NotNull
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="cliente_id")
	@Fetch(FetchMode.JOIN)
	private Cliente cliente;
	
	@NotNull
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="vendedor_id")
	@Fetch(FetchMode.JOIN)
	private Vendedor vendedor;
	
	@NotNull
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="status_solicitacao_id")
	@Fetch(FetchMode.JOIN)
	private StatusSolicitacao statussolicitacao;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getDtsolicitacao() {
		return dtsolicitacao;
	}

	public void setDtsolicitacao(Date dtsolicitacao) {
		this.dtsolicitacao = dtsolicitacao;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}

	public StatusSolicitacao getStatussolicitacao() {
		return statussolicitacao;
	}

	public void setStatussolicitacao(StatusSolicitacao statussolicitacao) {
		this.statussolicitacao = statussolicitacao;
	}
	
	
	
	
	
}
