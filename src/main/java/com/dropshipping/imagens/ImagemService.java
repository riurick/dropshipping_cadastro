package com.dropshipping.imagens;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.service.MessagesService;

@Service
public class ImagemService {
	
	public static final String IMAGEM_NAO_ECONTRADO = "imagem.naoEncontrada";
	
	@Autowired
	MessagesService messages;
	
	@Autowired
	ImagemRepository imagemRepository;
	
	public Imagem create(Imagem imagem) throws RegraNegocioException{
		return imagemRepository.save(imagem);
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
}
