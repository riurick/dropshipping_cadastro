package com.dropshipping.propagandas;

import java.util.Date;

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

import com.dropshipping.promocoes.Promocao;

@Entity
public class Propaganda {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	private Date validade;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="promocao_id")
	@Fetch(FetchMode.JOIN)
	private Promocao promocao;
}
