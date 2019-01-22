package com.dropshipping.clientes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;



@Service
public class ClienteService {
	
	public static final String CLIENTE_NAO_ECONTRADO = "Cliente não encontrado.";
	public static final String CPF_JA_CADASTRADO = "CPF já cadastrado.";
	public static final String EMAIL_JA_CADASTRADO = "E-mail já cadastrado.";

	@Autowired
	ClienteRepository clienteRepository;
	
	//@Autowired
	//MessagesService messages;
	
	public Cliente create(Cliente cliente) throws RegraNegocioException{
		if (!clienteRepository.findByCpf(cliente.getCpf().trim()).isEmpty()) {
			throw new RegraNegocioException(CPF_JA_CADASTRADO);
		}
		if (!clienteRepository.findByEmail(cliente.getEmail().trim()).isEmpty()) {
			throw new RegraNegocioException(EMAIL_JA_CADASTRADO);
		}

		return clienteRepository.save(cliente);
	}

	public Cliente update(Cliente cliente) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Cliente> existing = clienteRepository.findById(cliente.getId());
		List<Cliente> lista = clienteRepository.findByCpf(cliente.getCpf().trim());
		if (!lista.isEmpty() && !lista.get(0).getId().equals(cliente.getId())) {
			throw new RegraNegocioException(CPF_JA_CADASTRADO);
		}
		lista = clienteRepository.findByEmail(cliente.getEmail().trim());
		if (!lista.isEmpty() && !lista.get(0).getId().equals(cliente.getId())) {
			throw new RegraNegocioException(EMAIL_JA_CADASTRADO);
		}
		if (existing.isPresent()) {
			return clienteRepository.save(cliente);
		} else {
			throw new SampleEntityNotFoundException(CLIENTE_NAO_ECONTRADO);
		}
	}

	/*public Page<Cliente> getAll(Pageable pageable) {
		return assuntoRepository.findAll(pageable);
	}*/

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			clienteRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(CLIENTE_NAO_ECONTRADO);
		}
	}

	public Cliente findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Cliente> t = clienteRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(CLIENTE_NAO_ECONTRADO);
		}
	}

}
