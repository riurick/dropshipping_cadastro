package com.dropshipping.produtospedidos;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.dropshipping.pedidos.Pedido;
import com.dropshipping.produtos.Produto;

@Entity
public class ProdutoPedido {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@NotNull
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="pedido_id")
	@Fetch(FetchMode.JOIN)
	private Pedido pedido;
	
	@NotNull
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="produto_id")
	@Fetch(FetchMode.JOIN)
	private Produto produto;
	
	@NotNull
	private Integer quantidade;
	
	@NotNull
	private Double valor;
}
