import React from 'react'

const ContractorTile = (props) => {


    const handleEditClick = (event) => {
        event.preventDefault()
        props.editContractor(props.id)
    }

    const handleDeleteClick = (event) => {
        event.preventDefault()
        props.deleteContractor(props.id)
    }

    return(
        <div>
            <h4>{props.firstName} {props.lastName}</h4>
            <button onClick={handleEditClick} >Edit</button>
            <button onClick={handleDeleteClick} >Delete</button>
        </div>
    )
}

export default ContractorTile