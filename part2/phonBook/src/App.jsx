import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) =>{
    setNewName(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    

    const nameObj = {
      name:newName
    };
    setPersons(persons.concat(nameObj))
    setNewName("")
    
    
    
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person,newName)=>{
        return(
        <li key={newName}>{person.name}</li>
        )
      })}
      ...
    </div>
  )
}

export default App