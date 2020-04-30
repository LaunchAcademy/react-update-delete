import React, {useState, useEffect} from "react"

  

const ContractorForm = (props) => {
  const [contractor, setContractor] = useState({...props.contractor})
  useEffect(() => {
    setContractor(props.contractor)
  }, [props.contractor])

  const handleChange = (event) => {
    setContractor({
      ...contractor,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (props.id){
    let payload = {
      id: props.id,
      firstName: contractor.firstName,
      lastName: contractor.lastName,
      emailAddress: contractor.emailAddress,
      postalCode: contractor.postalCode,
      weeklyHoursAvailable: contractor.weeklyHoursAvailable
    }
      props.updateAddContractor(payload)
      setContractor(props.defaultNewContractor)
    }else{
    let payload = {
      firstName: contractor.firstName,
      lastName: contractor.lastName,
      emailAddress: contractor.emailAddress,
      postalCode: contractor.postalCode,
      weeklyHoursAvailable: contractor.weeklyHoursAvailable
    }
      props.updateAddContractor(payload)
      setContractor(props.defaultNewContractor)
    }
  }




  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Contractor</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          name="firstName" 
          id="firstName"
          onChange={handleChange}
          value={contractor.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          id="lastName"
          onChange={handleChange}
          value={contractor.lastName}
        />
      </div>
      <div>
        <label htmlFor="emailAddress">Email</label>
        <input 
          type="email" 
          name="emailAddress" 
          id="emailAddress"
          onChange={handleChange}
          value={contractor.emailAddress}
        />
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input 
          type="text" 
          name="postalCode" 
          id="postalCode"
          onChange={handleChange}
          value={contractor.postalCode}
        />
      </div>
      <div>
        <label htmlFor="weeklyHoursAvailable">Weekly Hours Available</label>
        <input 
          type="text" 
          name="weeklyHoursAvailable" 
          id="weeklyHoursAvailable"
          onChange={handleChange}
          value={contractor.weeklyHoursAvailable}
          
        />
      </div>

      <div>
        <input type="submit" value="Add Contractor" />
      </div>
    </form>
  )
  
}

export default ContractorForm