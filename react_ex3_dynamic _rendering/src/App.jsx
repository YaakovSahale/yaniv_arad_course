import { useState } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([
    { firstName: "Dana", age: 20, city: "Haifa" },
    { firstName: "Ron", age: 22, city: "Tel Aviv" },
    { firstName: "Dov", age: 31, city: "Ashdod" },
    { firstName: "Vered", age: 19, city: "Eilat" },
  ]);

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      firstName: e.target.firstName.value,
      age: e.target.age.value,
      city: e.target.city.value,
    };
    setPersons((prev) => [...prev, newPerson]);
    console.log(persons);
  };

  return (
    <div className="App">
      <form onSubmit={addPerson}>
        <input name="firstName" type="text" placeholder="firstName" />
        <br />
        <input name="age" type="text" placeholder="age" />
        <br />
        <input name="city" type="text" placeholder="city" />
        <br />
        <button>ADD PERSON</button>
        <br />
        <br />
      </form>

      <table className="myTable">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>city</th>
          </tr>
        </thead>

        <tbody>
          {persons.map((person, i) => (
            <tr key={i}>
              <td>{person.firstName}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <br />
      <br />

      {persons.map((person, i) => (
        <ul key={i}>
          <li>
            {person.firstName}
            <ul>
              <li>{person.age}</li>
              <li>{person.city}</li>
            </ul>
          </li>
        </ul>
      ))}

      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
