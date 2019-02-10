package com.dropshipping.categorias;

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
@RequestMapping("/api/v1/categoria")
@Api(value = "Categorias")
public class CategoriaController {
	public static final String CATEGORIA_CRIADO = "categoria.criada";
	public static final String CATEGORIA_ATUALIZADO = "categoria.atualizada";
	public static final String CATEGORIA_DELETADO = "categoria.excluida";
	
	@Autowired
	CategoriaService categoriaService;
	
	@Autowired
	private MessagesService messages;
	
	@PostMapping
	@ApiOperation(value = "Cria uma categoria")
	public ResponseEntity<ServiceResponse<Categoria>> create(@RequestBody @Valid Categoria categoria) throws RegraNegocioException {

		categoria = categoriaService.create(categoria);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(categoria.getId())
				.toUri();
		headers.setLocation(location);

		ServiceMessage message = new ServiceMessage(messages.get(CATEGORIA_CRIADO));

		return new ResponseEntity<>(new ServiceResponse<>(categoria, message), headers, HttpStatus.CREATED);
	}

	@ApiOperation(value = "Detalha uma Categoria pelo ID", notes = "Um ID válido deve ser informado", response = Categoria.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Categoria>> findById(@PathVariable Integer id) throws SampleEntityNotFoundException {
		return ResponseEntity.ok(new ServiceResponse<>(categoriaService.findById(id)));
	}

	@GetMapping
	@ApiOperation(value = "Lista", response = Categoria.class)
	public ServiceResponse<List<Categoria>> lista() {
		return new ServiceResponse<>(categoriaService.getAll());
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados da Categoria informado", notes = "Um ID válido deve ser informado", response = Categoria.class)
	public ResponseEntity<ServiceResponse<Categoria>> update(@PathVariable Integer id,
			@Valid @RequestBody Categoria categoria) throws RegraNegocioException, SampleEntityNotFoundException {
		if (!categoria.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ " Categoria não corresponde " + categoria.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		ServiceMessage message = new ServiceMessage(messages.get(CATEGORIA_ATUALIZADO));

		return new ResponseEntity<>(new ServiceResponse<>(categoriaService.update(categoria), message),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga uma Categoria pelo id", notes = "Um id válido deve ser informado", response = Categoria.class)
	public ResponseEntity<ServiceResponse<Void>> delete(@PathVariable Integer id) throws SampleEntityNotFoundException {
		categoriaService.delete(id);
		ServiceMessage message = new ServiceMessage(messages.get(CATEGORIA_DELETADO));

		return new ResponseEntity<>(new ServiceResponse<>(message), HttpStatus.OK);
	}

}
