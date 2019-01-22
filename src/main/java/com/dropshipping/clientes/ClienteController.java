package com.dropshipping.clientes;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/v1/clientes")
@Api(value = "Clientes")
public class ClienteController {
	
	@Autowired
	ClienteService clienteService;
	
//	@Autowired
//	private MessagesService messages;
	
	@PostMapping
	// @ApiOperation(value = "Cria um assunto")
	public ResponseEntity<ServiceResponse<Cliente>> create(@RequestBody @Valid Cliente cliente) {

		cliente = clienteService.create(cliente);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cliente.getId())
				.toUri();
		headers.setLocation(location);

		//ServiceMessage message = new ServiceMessage(messages.get("assunto.criado"));

		return new ResponseEntity<>(new ServiceResponse<>(cliente, "Cliente criado com sucesso"), headers, HttpStatus.CREATED);
	}

	// http://localhost:8080/api/v1/assuntos/1
	@ApiOperation(value = "Detalha um cliente pelo ID", notes = "Um ID válido deve ser informado", response = Cliente.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Cliente>> findById(@PathVariable Integer id) {
		return ResponseEntity.ok(new ServiceResponse<>(clienteService.getAssuntoPorId(id)));
	}

	// http://localhost:8080/api/v1/assuntos
//	@GetMapping
//	@ApiOperation(value = "Lista", response = Assunto.class)
//	public ServiceResponse<Page<Assunto>> listassuntosPaginado(Pageable pageable) {
//		return new ServiceResponse<>(clienteService.getAllAssuntos(pageable));
//	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados do cliente informado", notes = "Um ID válido deve ser informado", response = Cliente.class)
	public ResponseEntity<ServiceResponse<Cliente>> update(@PathVariable Integer id,
			@Valid @RequestBody Cliente cliente) {
		if (!cliente.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ "CLiente não corresponde" + cliente.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		//ServiceMessage message = new ServiceMessage(messages.get("assunto.atualizado"));

		return new ResponseEntity<>(new ServiceResponse<>(clienteService.updateAssunto(cliente), "Cadastro atualizado.,"),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga um cliente pelo id", notes = "Um id válido deve ser informado", response = Cliente.class)
	public ResponseEntity<ServiceResponse<Void>> deleteassunto(@PathVariable Integer id) {
		clienteService.deleteAssunto(id);
		//ServiceMessage message = new ServiceMessage(messages.get("assunto.deletado"));

		return new ResponseEntity<>(new ServiceResponse<>("Cliente excluído com sucesso."), HttpStatus.OK);
	}

}
