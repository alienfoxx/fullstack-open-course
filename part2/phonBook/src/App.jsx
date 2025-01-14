import { useState } from "react";
import Filter from "../components/Filter";
import PersonFrom from "../components/PersonFrom";
import Persons from "../components/Persons";

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

  const handleNameChange = (event) => {
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
      console.log("input empty");
      setPersons(persons);

      return;
    }
    const regex = new RegExp(newFilter, "i");
    const filtredPersone = () =>
      persons.filter((person) => person.name.match(regex));
    setPersons(filtredPersone);

    console.log(event.target);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} value={filter} />
      <h1>add a new</h1>
      <PersonFrom
        onSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newName={newName} />
      ...
    </div>
  );
};

export default App;
