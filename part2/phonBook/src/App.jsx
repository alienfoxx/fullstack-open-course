import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('ali')
 
  const handlePersonsChange = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) =>{
    event.preventDefault()
    console.log('element clickd is', event.target)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input 
          value = {newName}
          onChange={handlePersonsChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
    </div>
  )
}

export default App