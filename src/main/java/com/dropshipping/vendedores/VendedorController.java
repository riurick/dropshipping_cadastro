package com.dropshipping.vendedores;

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
@RequestMapping("/api/v1/vendedor")
@Api(value = "Vendedores")
public class VendedorController {
	public static final String VENDEDOR_CRIADO = "vendedor.criado";
	public static final String VENDEDOR_ATUALIZADO = "vendedor.atualizado";
	public static final String VENDEDOR_DELETADO = "vendedor.excluido";
	@Autowired
	VendedorService vendedorService;
	
	@Autowired
	private MessagesService messages;
	
	@PostMapping
	@ApiOperation(value = "Cria um vendedor")
	public ResponseEntity<ServiceResponse<Vendedor>> create(@RequestBody @Valid Vendedor vendedor) throws RegraNegocioException {

		vendedor = vendedorService.create(vendedor);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(vendedor.getId())
				.toUri();
		headers.setLocation(location);

		ServiceMessage message = new ServiceMessage(messages.get(VENDEDOR_CRIADO));

		return new ResponseEntity<>(new ServiceResponse<>(vendedor, message), headers, HttpStatus.CREATED);
	}

	@ApiOperation(value = "Detalha um vendedor pelo ID", notes = "Um ID válido deve ser informado", response = Vendedor.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Vendedor>> findById(@PathVariable Integer id) throws SampleEntityNotFoundException {
		return ResponseEntity.ok(new ServiceResponse<>(vendedorService.findById(id)));
	}

	@GetMapping
	@ApiOperation(value = "Lista", response = Vendedor.class)
	public ServiceResponse<List<Vendedor>> listassuntosPaginado() {
		return new ServiceResponse<>(vendedorService.getAll());
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados do vendedor informado", notes = "Um ID válido deve ser informado", response = Vendedor.class)
	public ResponseEntity<ServiceResponse<Vendedor>> update(@PathVariable Integer id,
			@Valid @RequestBody Vendedor vendedor) throws RegraNegocioException, SampleEntityNotFoundException {
		if (!vendedor.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ " Vendedor não corresponde " + vendedor.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		ServiceMessage message = new ServiceMessage(messages.get(VENDEDOR_ATUALIZADO));

		return new ResponseEntity<>(new ServiceResponse<>(vendedorService.update(vendedor), message),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga um vendedor pelo id", notes = "Um id válido deve ser informado", response = Vendedor.class)
	public ResponseEntity<ServiceResponse<Void>> delete(@PathVariable Integer id) throws SampleEntityNotFoundException {
		vendedorService.delete(id);
		ServiceMessage message = new ServiceMessage(messages.get(VENDEDOR_DELETADO));

		return new ResponseEntity<>(new ServiceResponse<>(message), HttpStatus.OK);
	}

}
