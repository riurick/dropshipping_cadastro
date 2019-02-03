package com.dropshipping.promocoesprodutos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.produtos.ProdutoRepository;
import com.dropshipping.promocoes.PromocaoRepository;
import com.dropshipping.service.MessagesService;

@Service
public class PromocaoProdutoService {
	public static final String PRODUTO_PEDIDO_NAO_ECONTRADO = "produtoPedido.naoEncontrado";
	public static final String PRODUTO_NAO_CADASTRADO = "produto.naoEncontrado";
	public static final String PROMOCAO_NAO_CADASTRADO = "promocao.naoEncontrado";

	
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@Autowired 
	PromocaoProdutoRepository promocaoProdutoRepository;
	
	@Autowired
	PromocaoRepository promocaoRepository;
	
	@Autowired
	MessagesService messages;
	
	public PromocaoProduto create(PromocaoProduto promocaoProduto) throws RegraNegocioException{
		validaPromocaoProduto(promocaoProduto);
		return promocaoProdutoRepository.save(promocaoProduto);
	}

	public PromocaoProduto update(PromocaoProduto promocaoProduto) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<PromocaoProduto> existing = promocaoProdutoRepository.findById(promocaoProduto.getId());
		validaPromocaoProduto(promocaoProduto);
		if (existing.isPresent()) {
			return promocaoProdutoRepository.save(promocaoProduto);
		} else {
			throw new SampleEntityNotFoundException(messages.get(PRODUTO_PEDIDO_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			promocaoProdutoRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(messages.get(PRODUTO_PEDIDO_NAO_ECONTRADO));
		}
	}

	public PromocaoProduto findById(Integer id) throws SampleEntityNotFoundException {
		Optional<PromocaoProduto> t = promocaoProdutoRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(messages.get(PRODUTO_PEDIDO_NAO_ECONTRADO));
		}
	}
	
	public List<PromocaoProduto> getAll() {
		return promocaoProdutoRepository.findAll();
	}
	
	public void validaPromocaoProduto(PromocaoProduto promocaoProduto) throws RegraNegocioException {
		if (!produtoRepository.findById(promocaoProduto.getProduto().getId()).isPresent()) {
			throw new RegraNegocioException(messages.get(PRODUTO_NAO_CADASTRADO));
		}
		if (!promocaoRepository.findById(promocaoProduto.getPromocao().getId()).isPresent()) {
			throw new RegraNegocioException(messages.get(PROMOCAO_NAO_CADASTRADO));
		}
	}
}
