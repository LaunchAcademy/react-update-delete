package com.launchacademy.springeditanddelete.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

@Entity
@Table(name="contractors")
@Getter
@Setter
public class Contractor {
  @Id
  @SequenceGenerator(name="contractor_generator", sequenceName="contractors_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="contractor_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name="first_name", nullable = false)
  private String firstName;

  @Column(name="last_name", nullable = false)
  private String lastName;

  @Column(name="email_address", nullable = false)
  @Email
  private String emailAddress;

  @Column(name="postal_code")
  private String postalCode;

  @Column(name="weekly_hours_available")
  private Integer weeklyHoursAvailable;

  @Column
  @Length(max=300)
  private String bio;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmailAddress() {
    return emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public Integer getWeeklyHoursAvailable() {
    return weeklyHoursAvailable;
  }

  public void setWeeklyHoursAvailable(Integer weeklyHoursAvailable) {
    this.weeklyHoursAvailable = weeklyHoursAvailable;
  }

  public String getBio() {
    return bio;
  }

  public void setBio(String bio) {
    this.bio = bio;
  }
}