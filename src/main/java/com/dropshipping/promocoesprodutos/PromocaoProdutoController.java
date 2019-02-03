package com.dropshipping.promocoesprodutos;

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

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/v1/promocaoProduto")
@Api(value = "PromocoesProdutos")
public class PromocaoProdutoController {
	@Autowired
	PromocaoProdutoService promocaoProdutoService;
	
	@PostMapping
	@ApiOperation(value = "Cria um assunto")
	public ResponseEntity<ServiceResponse<PromocaoProduto>> create(@RequestBody @Valid  PromocaoProduto promocaoProduto) throws RegraNegocioException {

		promocaoProduto = promocaoProdutoService.create(promocaoProduto);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(promocaoProduto.getId())
				.toUri();
		headers.setLocation(location);

		return new ResponseEntity<>(new ServiceResponse<>(promocaoProduto), headers, HttpStatus.CREATED);
	}

	@ApiOperation(value = "Detalha um PromocaoProduto pelo ID", notes = "Um ID válido deve ser informado", response = PromocaoProduto.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<PromocaoProduto>> findById(@PathVariable Integer id) throws SampleEntityNotFoundException {
		return ResponseEntity.ok(new ServiceResponse<>(promocaoProdutoService.findById(id)));
	}
	
	@GetMapping
	@ApiOperation(value = "Lista", response = PromocaoProduto.class)
	public ServiceResponse<List<PromocaoProduto>> lista() {
		return new ServiceResponse<>(promocaoProdutoService.getAll());
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados do PromocaoProduto informado", notes = "Um ID válido deve ser informado", response = PromocaoProduto.class)
	public ResponseEntity<ServiceResponse<PromocaoProduto>> update(@PathVariable Integer id,
			@Valid @RequestBody PromocaoProduto promocaoProduto) throws RegraNegocioException, SampleEntityNotFoundException {
		if (!promocaoProduto.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ " prodrutoPedido não corresponde " + promocaoProduto.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(new ServiceResponse<>(promocaoProdutoService.update(promocaoProduto)),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga um PromocaoProduto pelo id", notes = "Um id válido deve ser informado", response = PromocaoProduto.class)
	public ResponseEntity<ServiceResponse<Void>> delete(@PathVariable Integer id) throws SampleEntityNotFoundException {
		promocaoProdutoService.delete(id);
		return new ResponseEntity<>(new ServiceResponse<>(), HttpStatus.OK);
	}
	
}
