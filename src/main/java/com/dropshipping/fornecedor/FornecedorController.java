package com.dropshipping.fornecedor;

import java.net.URI;

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

import com.dropshipping.clientes.Cliente;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/v1/fornecedores")
@Api(value = "Fornecedores")
public class FornecedorController {

	@Autowired
	FornecedorService fornecedorService;
	
//	@Autowired
//	private MessagesService messages;
	
	@PostMapping
	// @ApiOperation(value = "Cria um assunto")
	public ResponseEntity<ServiceResponse<Fornecedor>> create(@RequestBody @Valid Fornecedor fornecedor) {

		fornecedor = fornecedorService.create(cliente);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(fornecedor.getId())
				.toUri();
		headers.setLocation(location);

		//ServiceMessage message = new ServiceMessage(messages.get("assunto.criado"));

		return new ResponseEntity<>(new ServiceResponse<>(fornecedor, "Fornecedor criado com sucesso"), headers, HttpStatus.CREATED);
	}

	// http://localhost:8080/api/v1/assuntos/1
	@ApiOperation(value = "Detalha um fornecedor pelo ID", notes = "Um ID válido deve ser informado", response = Fornecedor.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Fornecedor>> findById(@PathVariable Integer id) {
		return ResponseEntity.ok(new ServiceResponse<>(fornecedorService.findById(id)));
	}

	// http://localhost:8080/api/v1/assuntos
//	@GetMapping
//	@ApiOperation(value = "Lista", response = Assunto.class)
//	public ServiceResponse<Page<Assunto>> listassuntosPaginado(Pageable pageable) {
//		return new ServiceResponse<>(clienteService.getAllAssuntos(pageable));
//	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados do fornecedor informado", notes = "Um ID válido deve ser informado", response = Fornecedor.class)
	public ResponseEntity<ServiceResponse<Fornecedor>> update(@PathVariable Integer id,
			@Valid @RequestBody Fornecedor fornecedor) {
		if (!fornecedor.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ "Fornecedor não corresponde" + fornecedor.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		//ServiceMessage message = new ServiceMessage(messages.get("assunto.atualizado"));

		return new ResponseEntity<>(new ServiceResponse<>(fornecedorService.updateAssunto(fornecedor), "Cadastro atualizado.,"),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga um fornecedor pelo id", notes = "Um id válido deve ser informado", response = Fornecedor.class)
	public ResponseEntity<ServiceResponse<Void>> deleteassunto(@PathVariable Integer id) {
		fornecedorService.delete(id);
		//ServiceMessage message = new ServiceMessage(messages.get("assunto.deletado"));

		return new ResponseEntity<>(new ServiceResponse<>("Cliente excluído com sucesso."), HttpStatus.OK);
	}
}