import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameObj = {
      name: newName,
      number: newNumber,
    };

    if (!JSON.stringify(persons).includes(newName)) {
      setPersons(persons.concat(nameObj));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleFilterChange = (event) => {
    const newFilter = event.target.value.trim();
    setFilter(newFilter);

    if (!newFilter) {
      console.log("input empty")
      setPersons(persons);
     
      return;
    }
    const regex = new RegExp(newFilter, "i");
    const filtredPersone = () => persons.filter((person) => person.name.match(regex));
    setPersons(filtredPersone);

    console.log(event.target);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with<input type="text" onChange={handleFilterChange} value={filter} />

      <h1>add a new</h1>
      <form>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, newName) => {
        return (
          <li key={newName}>
            {person.name}: {person.number}
          </li>
        );
      })}
      ...
    </div>
  );
};

export default App;
