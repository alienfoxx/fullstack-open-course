import React from 'react'

const PersonFrom = ({newName,onSubmit,handleNameChange,handleNumberChange,newNumber}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonFrom