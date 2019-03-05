package com.dropshipping.fornecedores;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.response.MessageType;
import com.dropshipping.response.ServiceMessage;
import com.dropshipping.response.ServiceResponse;
import com.dropshipping.service.MessagesService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/v1/fornecedor")
@Api(value = "Fornecedores")
public class FornecedorController {

	public static final String FORNECEDOR_CRIADO = "fornecedor.criado";
	public static final String FORNECEDOR_ATUALIZADO = "fornecedor.atualizado";
	public static final String FORNECEDOR_EXCLUIDO = "fornecedor.excluido";
	
	@Autowired
	FornecedorService fornecedorService;
	
	@Autowired
	private MessagesService messages;
	
	@PostMapping
	@ApiOperation(value = "Cria um fornecedor")
	public ResponseEntity<ServiceResponse<Fornecedor>> create(@RequestBody @Valid Fornecedor fornecedor) throws RegraNegocioException {

		fornecedor = fornecedorService.create(fornecedor);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(fornecedor.getId())
				.toUri();
		headers.setLocation(location);

		ServiceMessage message = new ServiceMessage(messages.get(FORNECEDOR_CRIADO));

		return new ResponseEntity<>(new ServiceResponse<>(fornecedor, message), headers, HttpStatus.CREATED);
	}

	// http://localhost:8080/api/v1/assuntos/1
	@ApiOperation(value = "Detalha um fornecedor pelo ID", notes = "Um ID válido deve ser informado", response = Fornecedor.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Fornecedor>> findById(@PathVariable Integer id) throws SampleEntityNotFoundException {
		return ResponseEntity.ok(new ServiceResponse<>(fornecedorService.findById(id)));
	}

	@GetMapping
	@ApiOperation(value = "Lista", response = Fornecedor.class)
	public ServiceResponse<List<Fornecedor>> listassuntosPaginado() {
		return new ServiceResponse<>(fornecedorService.getAll());
	}
	
	@GetMapping("/login")
	@ApiOperation(value="Login de Fornecedor", notes = "Informar e-mail e senha válidos", response = Fornecedor.class)
	public ResponseEntity<ServiceResponse<Fornecedor>> login(@RequestBody Fornecedor fornecedor) throws SampleEntityNotFoundException {
		return ResponseEntity.ok( new ServiceResponse<>(fornecedorService.login(fornecedor.getEmail(), fornecedor.getSenha())));
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados do fornecedor informado", notes = "Um ID válido deve ser informado", response = Fornecedor.class)
	public ResponseEntity<ServiceResponse<Fornecedor>> update(@PathVariable Integer id,
			@Valid @RequestBody Fornecedor fornecedor) throws RegraNegocioException, SampleEntityNotFoundException {
		if (!fornecedor.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ " Fornecedor não corresponde " + fornecedor.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		ServiceMessage message = new ServiceMessage(messages.get(FORNECEDOR_ATUALIZADO));

		return new ResponseEntity<>(new ServiceResponse<>(fornecedorService.update(fornecedor), message),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga um fornecedor pelo id", notes = "Um id válido deve ser informado", response = Fornecedor.class)
	public ResponseEntity<ServiceResponse<Void>> deleteassunto(@PathVariable Integer id) throws SampleEntityNotFoundException {
		fornecedorService.delete(id);
		ServiceMessage message = new ServiceMessage(messages.get(FORNECEDOR_EXCLUIDO));

		return new ResponseEntity<>(new ServiceResponse<>(message), HttpStatus.OK);
	}
}
