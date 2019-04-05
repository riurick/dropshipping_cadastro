package com.dropshipping.fornecedores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dropshipping.enderecos.EnderecoRepository;
import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.service.MessagesService;
import com.dropshipping.util.ValidaCNPJ;

@Service
public class FornecedorService {
	public static final String FORNECEDOR_NAO_ECONTRADO = "fornecedor.naoEncontrado";
	public static final String CNPJ_JA_CADASTRADO = "cnpj.jaCadastrado";
	public static final String CNPJ_INVALIDO = "cnpj.invalido";
	public static final String FORNECEDOR_INVALIDO = "fornecedor.invalido";

	@Autowired
	FornecedorRepository fornecedorRepository;
	
	@Autowired
	EnderecoRepository enderecoRepository;
	
	@Autowired
	MessagesService messages;
	
	private PasswordEncoder enconder;
	
	public FornecedorService() {
		super();
		enconder = new BCryptPasswordEncoder();
	}

	public Fornecedor create(Fornecedor fornecedor) throws RegraNegocioException{
		validaFornecedor(fornecedor);
		//Cadastrando endereço
		fornecedor.setEndereco(enderecoRepository.save(fornecedor.getEndereco()));
		fornecedor.setSenha(enconder.encode(fornecedor.getSenha()));
		return fornecedorRepository.save(fornecedor);
	}

	public Fornecedor update(Fornecedor fornecedor) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Fornecedor> existing = fornecedorRepository.findById(fornecedor.getId());
		validaFornecedor(fornecedor);
		if (existing.isPresent()) {
			enderecoRepository.save(fornecedor.getEndereco());
			fornecedor.setSenha(enconder.encode(fornecedor.getSenha()));
			return fornecedorRepository.save(fornecedor);
		} else {
			throw new SampleEntityNotFoundException(messages.get(FORNECEDOR_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			fornecedorRepository.deleteById(id);
			enderecoRepository.delete(fornecedorRepository.findById(id).get().getEndereco());
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
	
	public void validaFornecedor(Fornecedor fornecedor) throws RegraNegocioException {
		if (!fornecedorRepository.findByCnpj(fornecedor.getCnpj().trim()).isEmpty()) {
			throw new RegraNegocioException(messages.get(CNPJ_JA_CADASTRADO));
		}
		if(!ValidaCNPJ.isCNPJ(fornecedor.getCnpj())) {
			throw new RegraNegocioException(CNPJ_INVALIDO);
		}
	}

	public Fornecedor login(String email, String senha) throws SampleEntityNotFoundException {
		Optional<Fornecedor> op = fornecedorRepository.login(email, senha);
		if(!op.isPresent()) {
			throw new SampleEntityNotFoundException(messages.get(FORNECEDOR_INVALIDO));
		}
		return op.get();
	}

	public Fornecedor findByEmail(String email) throws SampleEntityNotFoundException {
		Optional<Fornecedor> op = fornecedorRepository.findByEmail(email);
		if(!op.isPresent()) {
			throw new SampleEntityNotFoundException(messages.get(FORNECEDOR_NAO_ECONTRADO));
		}
		return op.get();
	}

}
