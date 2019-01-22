package com.dropshipping.fornecedor;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;

@Service
public class FornecedorService {
	public static final String FORNECEDOR_NAO_ECONTRADO = "Fornecedor não encontrado.";
	public static final String CPF_JA_CADASTRADO = "CPF já cadastrado.";
	public static final String EMAIL_JA_CADASTRADO = "E-mail já cadastrado.";

	@Autowired
	FornecedorRepository fornecedorRepository;
	
	//@Autowired
	//MessagesService messages;
	
	public Fornecedor create(Fornecedor fornecedor) throws RegraNegocioException{
		if (!fornecedorRepository.findByCpf(fornecedor.getCpf().trim()).isEmpty()) {
			throw new RegraNegocioException(CPF_JA_CADASTRADO);
		}
		if (!fornecedorRepository.findByEmail(fornecedor.getEmail().trim()).isEmpty()) {
			throw new RegraNegocioException(EMAIL_JA_CADASTRADO);
		}

		return fornecedorRepository.save(fornecedor);
	}

	public Fornecedor update(Fornecedor fornecedor) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Fornecedor> existing = fornecedorRepository.findById(fornecedor.getId());
		List<Fornecedor> lista = fornecedorRepository.findByCpf(fornecedor.getCpf().trim());
		if (!lista.isEmpty() && !lista.get(0).getId().equals(fornecedor.getId())) {
			throw new RegraNegocioException(CPF_JA_CADASTRADO);
		}
		lista = fornecedorRepository.findByEmail(fornecedor.getEmail().trim());
		if (!lista.isEmpty() && !lista.get(0).getId().equals(fornecedor.getId())) {
			throw new RegraNegocioException(EMAIL_JA_CADASTRADO);
		}
		if (existing.isPresent()) {
			return fornecedorRepository.save(fornecedor);
		} else {
			throw new SampleEntityNotFoundException(FORNECEDOR_NAO_ECONTRADO);
		}
	}

	/*public Page<Cliente> getAll(Pageable pageable) {
		return assuntoRepository.findAll(pageable);
	}*/

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			fornecedorRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(FORNECEDOR_NAO_ECONTRADO);
		}
	}

	public Fornecedor findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Fornecedor> t = fornecedorRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(FORNECEDOR_NAO_ECONTRADO);
		}
	}

}
