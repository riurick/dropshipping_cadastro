package com.dropshipping.fornecedores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.service.MessagesService;

@Service
public class FornecedorService {
	public static final String FORNECEDOR_NAO_ECONTRADO = "fornecedor.naoEncontrado";
	public static final String CNPJ_JA_CADASTRADO = "cnpj.jaCadastrado";

	@Autowired
	FornecedorRepository fornecedorRepository;
	
	@Autowired
	MessagesService messages;
	
	public Fornecedor create(Fornecedor fornecedor) throws RegraNegocioException{
		if (!fornecedorRepository.findByCnpj(fornecedor.getCnpj().trim()).isEmpty()) {
			throw new RegraNegocioException(messages.get(CNPJ_JA_CADASTRADO));
		}

		return fornecedorRepository.save(fornecedor);
	}

	public Fornecedor update(Fornecedor fornecedor) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Fornecedor> existing = fornecedorRepository.findById(fornecedor.getId());
		List<Fornecedor> lista = fornecedorRepository.findByCnpj(fornecedor.getCnpj().trim());
		if (!lista.isEmpty() && !lista.get(0).getId().equals(fornecedor.getId())) {
			throw new RegraNegocioException(messages.get(CNPJ_JA_CADASTRADO));
		}
		if (existing.isPresent()) {
			return fornecedorRepository.save(fornecedor);
		} else {
			throw new SampleEntityNotFoundException(messages.get(FORNECEDOR_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			fornecedorRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(messages.get(FORNECEDOR_NAO_ECONTRADO));
		}
	}

	public Fornecedor findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Fornecedor> t = fornecedorRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(messages.get(FORNECEDOR_NAO_ECONTRADO));
		}
	}

	public List<Fornecedor> getAll() {
		return fornecedorRepository.findAll();
	}

}
