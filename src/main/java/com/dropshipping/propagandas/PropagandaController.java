package com.dropshipping.propagandas;

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
@RequestMapping("/api/v1/propagandas")
@Api(value = "Propagandas")
@CrossOrigin("*")
public class PropagandaController {
	public static final String PROPAGANDA_CRIADO = "propaganda.criado";
	public static final String PROPAGANDA_ATUALIZADO = "propaganda.atualizado";
	public static final String PROPAGANDA_DELETADO = "propaganda.deletado";
	
	@Autowired
	PropagandaService propagandaService;
	
	@Autowired
	private MessagesService messages;
	
	@PostMapping
	@ApiOperation(value = "Cria uma propaganda")
	public ResponseEntity<ServiceResponse<Propaganda>> create(@RequestBody @Valid Propaganda propaganda) throws RegraNegocioException {

		propaganda = propagandaService.create(propaganda);

		HttpHeaders headers = new HttpHeaders();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(propaganda.getId())
				.toUri();
		headers.setLocation(location);

		ServiceMessage message = new ServiceMessage(messages.get(PROPAGANDA_CRIADO));

		return new ResponseEntity<>(new ServiceResponse<>(propaganda, message), headers, HttpStatus.CREATED);
	}

	@ApiOperation(value = "Detalha uma Propaganda pelo ID", notes = "Um ID válido deve ser informado", response = Propaganda.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Propaganda>> findById(@PathVariable Integer id) throws SampleEntityNotFoundException {
		return ResponseEntity.ok(new ServiceResponse<>(propagandaService.findById(id)));
	}

	@GetMapping
	@ApiOperation(value = "Lista", response = Propaganda.class)
	public ServiceResponse<List<Propaganda>> lista() {
		return new ServiceResponse<>(propagandaService.getAll());
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados da Propaganda informado", notes = "Um ID válido deve ser informado", response = Propaganda.class)
	public ResponseEntity<ServiceResponse<Propaganda>> update(@PathVariable Integer id,
			@Valid @RequestBody Propaganda propaganda) throws RegraNegocioException, SampleEntityNotFoundException {
		if (!propaganda.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ " propaganda não corresponde " + propaganda.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		ServiceMessage message = new ServiceMessage(messages.get(PROPAGANDA_ATUALIZADO));

		return new ResponseEntity<>(new ServiceResponse<>(propagandaService.update(propaganda), message),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga uma Propaganda pelo id", notes = "Um id válido deve ser informado", response = Propaganda.class)
	public ResponseEntity<ServiceResponse<Void>> delete(@PathVariable Integer id) throws SampleEntityNotFoundException {
		propagandaService.delete(id);
		ServiceMessage message = new ServiceMessage(messages.get(PROPAGANDA_DELETADO));

		return new ResponseEntity<>(new ServiceResponse<>(message), HttpStatus.OK);
	}
}
