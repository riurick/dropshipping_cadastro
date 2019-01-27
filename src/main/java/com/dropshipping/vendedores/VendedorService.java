package com.dropshipping.vendedores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.service.MessagesService;
import com.dropshipping.util.ValidaEmail;
import com.dropshipping.util.ValidacaoCpfUtil;

@Service
public class VendedorService {
	public static final String VENDEDOR_NAO_ECONTRADO = "vendedor.naoEncontrado";
	public static final String CPF_JA_CADASTRADO = "cpf.jaCadastrado";
	public static final String EMAIL_JA_CADASTRADO = "email.jaCadastrado";
	public static final String CPF_INVALIDO = "cpf.invalido";
	public static final String EMAIL_INVALIDO = "email.invalido";
	
	@Autowired
	VendedorRepository vendedorRepository;
	
	@Autowired
	MessagesService messages;
	
	public Vendedor create(Vendedor vendedor) throws RegraNegocioException{
		validaVendedor(vendedor);

		return vendedorRepository.save(vendedor);
	}

	public Vendedor update(Vendedor vendedor) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Vendedor> existing = vendedorRepository.findById(vendedor.getId());
		validaVendedor(vendedor);
		if (existing.isPresent()) {
			return vendedorRepository.save(vendedor);
		} else {
			throw new SampleEntityNotFoundException(messages.get(VENDEDOR_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			vendedorRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(messages.get(VENDEDOR_NAO_ECONTRADO));
		}
	}

	public Vendedor findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Vendedor> t = vendedorRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(messages.get(VENDEDOR_NAO_ECONTRADO));
		}
	}

	public List<Vendedor> getAll() {
		return vendedorRepository.findAll();
	}
	
	public void validaVendedor(Vendedor vendedor) throws RegraNegocioException {
		if (!vendedorRepository.findByCpf(vendedor.getCpf().trim()).isEmpty()) {
			throw new RegraNegocioException(messages.get(CPF_JA_CADASTRADO));
		}
		if (!vendedorRepository.findByEmail(vendedor.getEmail().trim()).isEmpty()) {
			throw new RegraNegocioException(messages.get(EMAIL_JA_CADASTRADO));
		}
		if(!ValidacaoCpfUtil.isValidCPF(vendedor.getCpf())) {
			throw new RegraNegocioException(messages.get(CPF_INVALIDO));
		}
		if(!ValidaEmail.validar(vendedor.getEmail())) {
			throw new RegraNegocioException(messages.get(EMAIL_INVALIDO));
		}
	}
}
