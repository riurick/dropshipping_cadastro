package com.dropshipping.imagens;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
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
@RequestMapping("/api/v1/imagem")
@Api(value = "Imagens")
public class ImagemController {
	
	public static final String IMAGEM_DELETADO = "imagem.excluida";
	@Autowired
	ImagemService imagemService;
	
	@Autowired
	private MessagesService messages;
	
	@PostMapping
	@ApiOperation(value = "Cria uma imagem")
	public ResponseEntity<ServiceResponse<List<Imagem>>> create(@RequestParam(value="files") List<MultipartFile> files) throws RegraNegocioException, IOException {
		List<Imagem> imagens = new ArrayList<>();
		imagens = imagemService.create(imagens, files);

		return new ResponseEntity<>(new ServiceResponse<>(imagens), HttpStatus.CREATED);
	}

	@ApiOperation(value = "Detalha uma imagem pelo ID", notes = "Um ID válido deve ser informado", response = Imagem.class)
	@GetMapping("/{id}")
	public ResponseEntity<ServiceResponse<Imagem>> findById(@PathVariable Integer id) throws SampleEntityNotFoundException {
		return ResponseEntity.ok(new ServiceResponse<>(imagemService.findById(id)));
	}

	@GetMapping
	@ApiOperation(value = "Lista", response = Imagem.class)
	public ServiceResponse<List<Imagem>> listaPaginado() {
		return new ServiceResponse<>(imagemService.getAll());
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera os dados do imagem informado", notes = "Um ID válido deve ser informado", response = Imagem.class)
	public ResponseEntity<ServiceResponse<Imagem>> update(@PathVariable Integer id,
			@Valid @RequestBody Imagem imagem) throws RegraNegocioException, SampleEntityNotFoundException {
		if (!imagem.getId().equals(id)) {
			return new ResponseEntity<>(
					new ServiceResponse<>(null,
							new ServiceMessage(MessageType.ERROR, "URL ID: '" + id
									+ " imagem não corresponde " + imagem.getId() + "'.")),
					HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(new ServiceResponse<>(imagemService.update(imagem)),
				HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "Apaga um Imagem pelo id", notes = "Um id válido deve ser informado", response = Imagem.class)
	public ResponseEntity<ServiceResponse<Void>> deleteassunto(@PathVariable Integer id) throws SampleEntityNotFoundException {
		imagemService.delete(id);
		ServiceMessage message = new ServiceMessage(messages.get(IMAGEM_DELETADO));

		return new ResponseEntity<>(new ServiceResponse<>(message), HttpStatus.OK);
	}
}
