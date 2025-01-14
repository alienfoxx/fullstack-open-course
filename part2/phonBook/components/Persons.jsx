import React from 'react'

const Persons = ({persons, newName}) => {
  return (
    persons.map((person, newName) => {
      return (
        <li key={newName}>
          {person.name}: {person.number}
        </li>
      );
    })
  )
}

export default Persons