package com.dropshipping.propagandas;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.promocoes.PromocaoRepository;
import com.dropshipping.service.MessagesService;

@Service
public class PropagandaService {
	public static final String PROPAGANDA_NAO_ECONTRADO = "propaganda.naoEncontrado";
	public static final String DATA_INVALIDA = "data.invalida";
	public static final String PROMOCAO_NAO_ENCONTRADO = "promocao.naoEncontrado";

	@Autowired
	PropagandaRepository propagandaRepository;
	
	@Autowired
	PromocaoRepository promocaoRepository;
	
	@Autowired
	MessagesService messages;
	
	public Propaganda create(Propaganda propaganda) throws RegraNegocioException{
		validaPropaganda(propaganda);
		return propagandaRepository.save(propaganda);
	}

	public Propaganda update(Propaganda propaganda) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Propaganda> existing = propagandaRepository.findById(propaganda.getId());
		validaPropaganda(propaganda);
		if (existing.isPresent()) {
			return propagandaRepository.save(propaganda);
		} else {
			throw new SampleEntityNotFoundException(messages.get(PROPAGANDA_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			propagandaRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(messages.get(PROPAGANDA_NAO_ECONTRADO));
		}
	}

	public Propaganda findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Propaganda> t = propagandaRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(messages.get(PROPAGANDA_NAO_ECONTRADO));
		}
	}

	public List<Propaganda> getAll() {
		return propagandaRepository.findAll();
	}
	
	public void validaPropaganda(Propaganda propaganda) throws RegraNegocioException {
		if (propaganda.getValidade().before(new Date())) {
			throw new RegraNegocioException(messages.get(DATA_INVALIDA));
		}
		if (!promocaoRepository.findById(propaganda.getId()).isPresent()) {
			throw new RegraNegocioException(messages.get(PROMOCAO_NAO_ENCONTRADO));
		}
	}
}
