package com.dropshipping.promocoes;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping("/api/v1/promocoes")
@Api(value = "Promocoes")
@CrossOrigin("*")
public class PromocaoController {
	public static final String PROMOCAO_CRIADO = "promocao.criado";
	public static final String PROMOCAO_ATUALIZADO = "promocao.atualizado";
	public static final String PROMOCAO_DELETADO = "promocao.deletado";
	
	@Autowired
	PromocaoService promocaoService;
	
	@Autowired
	private MessagesService messages;
	
	@PostMapping
	@ApiOperation(value = "Cria uma Promocao")
	public ResponseEntity<ServiceResponse<Promocao>> create(@RequestBody @Valid Promocao promocao) throws RegraNegocioException {

		promocao = promocaoService.create(promocao);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(promocao.getId())
				.toUri();
		headers.setLocation(location);

		ServiceMessage message = new ServiceMessage(messages.get(PROMOCAO_CRIADO));

		return new ResponseEntity<>(new ServiceResponse<>(promocao, message), headers, HttpStatus.CREATED);
	}

	@ApiOperation(value = "Detalha uma Promocao pelo ID", notes = "Um ID válido deve ser informado", response = Promocao.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Promocao>> findById(@PathVariable Integer id) throws SampleEntityNotFoundException {
		return ResponseEntity.ok(new ServiceResponse<>(promocaoService.findById(id)));
	}

	@GetMapping
	@ApiOperation(value = "Lista", response = Promocao.class)
	public ServiceResponse<List<Promocao>> lista() {
		return new ServiceResponse<>(promocaoService.getAll());
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados da Promocao informada", notes = "Um ID válido deve ser informado", response = Promocao.class)
	public ResponseEntity<ServiceResponse<Promocao>> update(@PathVariable Integer id,
			@Valid @RequestBody Promocao promocao) throws RegraNegocioException, SampleEntityNotFoundException {
		if (!promocao.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ " Promocao não corresponde " + promocao.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		ServiceMessage message = new ServiceMessage(messages.get(PROMOCAO_ATUALIZADO));

		return new ResponseEntity<>(new ServiceResponse<>(promocaoService.update(promocao), message),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga um promocao pelo id", notes = "Um id válido deve ser informado", response = Promocao.class)
	public ResponseEntity<ServiceResponse<Void>> delete(@PathVariable Integer id) throws SampleEntityNotFoundException {
		promocaoService.delete(id);
		ServiceMessage message = new ServiceMessage(messages.get(PROMOCAO_DELETADO));

		return new ResponseEntity<>(new ServiceResponse<>(message), HttpStatus.OK);
	}
}
