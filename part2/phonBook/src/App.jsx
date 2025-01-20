import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonFrom from "./components/PersonFrom";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleEffectHook = () => {
    try {
      console.log("effect");
      axios.get("http://localhost:3001/persons").then((response) => {
        console.log(" promise fullfild");

        setPersons(response.data);
      });
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  };

  useEffect(handleEffectHook, []);

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
    setFilter(event.target.value);
  };

  // Filter persons based on the filter value
  const filteredPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

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
      <Persons persons={filteredPersons} newName={newName} />
      ...
    </div>
  );
};

export default App;
