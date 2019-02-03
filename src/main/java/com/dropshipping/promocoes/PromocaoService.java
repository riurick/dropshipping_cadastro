package com.dropshipping.promocoes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.service.MessagesService;

@Service
public class PromocaoService {

	public static final String PROMOCAO_NAO_ECONTRADO = "promocao.naoEncontrado";

	@Autowired
	PromocaoRepository promocaoRepository;
	
	@Autowired
	MessagesService messages;
	
	public Promocao create(Promocao promocao) throws RegraNegocioException{
		return promocaoRepository.save(promocao);
	}

	public Promocao update(Promocao promocao) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Promocao> existing = promocaoRepository.findById(promocao.getId());
		if (existing.isPresent()) {
			return promocaoRepository.save(promocao);
		} else {
			throw new SampleEntityNotFoundException(messages.get(PROMOCAO_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			promocaoRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(messages.get(PROMOCAO_NAO_ECONTRADO));
		}
	}

	public Promocao findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Promocao> t = promocaoRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(messages.get(PROMOCAO_NAO_ECONTRADO));
		}
	}

	public List<Promocao> getAll() {
		return promocaoRepository.findAll();
	}
	
}
