import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";

import ContractorForm from "./ContractorForm"
import ContractorTile from "./ContractorTile"

//useState
//where to replace the CRUD
const App = (props) => {
  const defaultNewContractor = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    postalCode: "",
    weeklyHoursAvailable: 0
  }
  const [contractors, setContractors] = useState([])
  const [updatedContractor, setUpdatedContractor] = useState(defaultNewContractor)
  const [loading, setLoading] = useState(true)


  const loadContractors = () => {
    fetch("/api/v1/contractors").then((resp) => {
      if(resp.ok) {
        return resp
      }
      else {
        throw new Error(resp.Error)
      }
    }).then(resp => {
      return resp.json();
    }).then(body => {
      setContractors(body)
      setLoading(false)
    })
  }
  useEffect(loadContractors, [])

  const deleteContractor = (contractor) => {
    fetch(`api/v1/contractors/${contractor}`, {
        credentials: 'same-origin',
        method: 'DELETE',
        body: JSON.stringify(contractor),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw (error)
        }
      })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setContractors([...contractors,
          json
        ])
      })

  }

  const editContractor = (updatedContractor) => {
    fetch(`/api/v1/contractors/${updatedContractor}`)
    .then((resp) => {
      if (resp.ok){
        return resp
      }else{
        throw new Error(resp.Error)
      }
      }).then(resp => {
        return resp.json();
      }).then(body => {
        setUpdatedContractor({...body})
        setLoading(false)
      })
  }

    const updateAddContractor = (payload) => {
        setLoading(true)
          if (payload.id) {
            debugger
            fetch(`/api/v1/contractors/${payload}`, {
              method: "PUT",
              body: JSON.stringify(payload),
              headers: {
                "Content-Type": "application/json"
              }
            }).then(resp => {
              return resp.json()
            }).then(json => {
              setLoading(false)
              setContractors([
                ...contractors,
                json
              ])
            }).catch(() => {
              alert("Your form submission is invalid")
            })
        }else{
          debugger
        fetch("/api/v1/contractors", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(resp => {
          return resp.json()
        }).then(json => {
          setLoading(false)
          setContractors([
            ...contractors,
            json
          ])
        }).catch(() => {
          alert("Your form submission is invalid")
        })
      }
    }


  const contractorListItems = contractors.map(contractor => {
    return (
      <ContractorTile
        key={contractor.id}
        id={contractor.id}
        firstName={contractor.firstName}
        lastName={contractor.lastName}
        editContractor={editContractor}
        deleteContractor={deleteContractor}
      />
    )
  })

  let loadingIndicator = <p>Loading...</p>
  if(!loading) {
    loadingIndicator = null
  }
  
  return (
    <div>
      {loadingIndicator}
      <h1>Active Contractors</h1>
      {contractorListItems}
      <ContractorForm 
        updateAddContractor={updateAddContractor}
        contractor={updatedContractor} 
        defaultNewContractor={defaultNewContractor}
      />
    </div>
  )
}

ReactDom.render(<App />,document.getElementById("app"))