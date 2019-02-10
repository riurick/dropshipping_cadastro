package com.dropshipping.categorias;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dropshipping.exception.RegraNegocioException;
import com.dropshipping.exception.SampleEntityNotFoundException;
import com.dropshipping.service.MessagesService;

@Service
public class CategoriaService {
	
	public static final String CATEGORIA_NAO_ECONTRADO = "categoria.naoEcontrada";
	@Autowired
	CategoriaRepository categoriaRepository;

	@Autowired
	MessagesService messages;
	
	public Categoria create(Categoria categoria) throws RegraNegocioException{
		return categoriaRepository.save(categoria);
	}

	public Categoria update(Categoria categoria) throws RegraNegocioException, SampleEntityNotFoundException {
		Optional<Categoria> existing =categoriaRepository.findById(categoria.getId());
		if (existing.isPresent()) {
			return categoriaRepository.save(categoria);
		} else {
			throw new SampleEntityNotFoundException(messages.get(CATEGORIA_NAO_ECONTRADO));
		}
	}

	public void delete(Integer id) throws SampleEntityNotFoundException {
		try {
			categoriaRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new SampleEntityNotFoundException(messages.get(CATEGORIA_NAO_ECONTRADO));
		}
	}

	public Categoria findById(Integer id) throws SampleEntityNotFoundException {
		Optional<Categoria> t = categoriaRepository.findById(id);
		if (t.isPresent()) {
			return t.get();
		} else {
			throw new SampleEntityNotFoundException(messages.get(CATEGORIA_NAO_ECONTRADO));
		}
	}

	public List<Categoria> getAll() {
		return categoriaRepository.findAll();
	}
	
}
