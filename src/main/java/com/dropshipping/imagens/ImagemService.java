package com.dropshipping.imagens;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.produtos.Produto;
import com.dropshipping.produtos.ProdutoRepository;
import com.dropshipping.service.MessagesService;

@Service
public class ImagemService {
	
	public static final String IMAGEM_NAO_ECONTRADO = "imagem.naoEncontrada";
	public static final String PRODUTO_NAO_ENCONTRADO = "produto.naoEncontrado";
	
	@Autowired
	MessagesService messages;
	
	@Autowired
	ImagemRepository imagemRepository;
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	public List<Imagem> create(@Valid List<Imagem> imagens, List<MultipartFile> arquivos) throws RegraNegocioException, IOException{
		for( int i=0; i< arquivos.size(); i++ ) {
			Imagem imagem = new Imagem();
			imagem.setNome(arquivos.get(i).getOriginalFilename());
			imagem.setArquivo(arquivos.get(i).getBytes());
			imagens.add(imagemRepository.save(imagem));
		}
		return imagens;
	}

	public Imagem update(Imagem imagem) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Imagem> existing = imagemRepository.findById(imagem.getId());
		if (existing.isPresent()) {
			return imagemRepository.save(imagem);
		} else {
			throw new SampleEntityNotFoundException(messages.get(IMAGEM_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			imagemRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(messages.get(IMAGEM_NAO_ECONTRADO));
		}
	}

	public Imagem findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Imagem> t = imagemRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(messages.get(IMAGEM_NAO_ECONTRADO));
		}
	}

	public List<Imagem> getAll() {
		return imagemRepository.findAll();
	}
	
	@Transactional
	public List<Imagem> buscaPorProduto(Integer id) throws SampleEntityNotFoundException {
		Optional<Produto> op = produtoRepository.findById(id);
		if(!op.isPresent()) {
			throw new SampleEntityNotFoundException(messages.get(PRODUTO_NAO_ENCONTRADO));
		}
		return imagemRepository.findByProduto(op.get());
	}
}
