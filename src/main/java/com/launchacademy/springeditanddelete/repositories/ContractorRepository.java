package com.launchacademy.springeditanddelete.repositories;

import com.launchacademy.springeditanddelete.models.Contractor;
import org.springframework.data.repository.CrudRepository;

public interface ContractorRepository extends CrudRepository<Contractor, Integer> {

}
