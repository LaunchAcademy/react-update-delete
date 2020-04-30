package com.launchacademy.springeditanddelete.seeders;

import com.launchacademy.springeditanddelete.models.Contractor;
import com.launchacademy.springeditanddelete.repositories.ContractorRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ContractorSeeder implements CommandLineRunner {

  @Autowired
  private ContractorRepository contractorRepo;

  @Override
  public void run(String... args) throws Exception {
    List<Contractor> contractors = new ArrayList<Contractor>();
    Contractor jonSnow = new Contractor();
    jonSnow.setFirstName("Jon");
    jonSnow.setLastName("Snow");
    jonSnow.setEmailAddress("jon@example.com");
    jonSnow.setPostalCode("02110");
    jonSnow.setWeeklyHoursAvailable(40);
    contractors.add(jonSnow);

    Contractor sam = new Contractor();
    sam.setFirstName("Samwell");
    sam.setLastName("Tarly");
    sam.setEmailAddress("sam@example.com");
    sam.setPostalCode("02111");
    sam.setWeeklyHoursAvailable(20);
    contractors.add(sam);

    if(contractorRepo.count() == 0) {
      for(Contractor contractor : contractors) {
        contractorRepo.save(contractor);
      }
    }
  }
}
