import React, { useState } from 'react';
import './App.css';
import celebs from './contacts.json'

const App = () => {
  console.log(celebs.length)
  const [contacts, setContacts] = useState(celebs.slice(0, 5))

  const addContact = () => {
    let random = celebs[Math.floor(Math.random() * celebs.length)]
    if (contacts.length < celebs.length) {
      if (contacts.find(el => el.id === random.id)) {
        console.log(random, ": celeb already exists")
        addContact()
      } else {
        let newContacts = [random, ...contacts]
        setContacts(newContacts)
        console.log(contacts)
      }
    } else { console.log("Celebrity database exhausted") }
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Celebrities Tracker</th>
          </tr>
          <tr>
            <td>Profile</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button onClick={addContact}>Add Random Celebrity</button></td>
          </tr>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} height="100px" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;