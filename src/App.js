import React, { useState } from 'react';
import './App.css';
import celebs from './contacts.json'

const App = () => {

  const [contacts, setContacts] = useState(celebs.slice(0, 5))

  const addContact = () => {
    let random = celebs[Math.floor(Math.random() * celebs.length)]
    if (contacts.length < celebs.length) {
      if (contacts.find(el => el.id === random.id)) {
        // console.log(random, ": celeb already exists")
        addContact()
      } else {
        let newContacts = [random, ...contacts]
        setContacts(newContacts)
      }
    } else { console.log("Celebrity database exhausted") }
  }

  const sortByName = () => {
    contacts.sort((a, b) => {
      if (a.name < b.name) return -1
      else return 1
    })
    let newContacts = [...contacts]
    setContacts(newContacts)
  }

  const sortByPop = () => {
    contacts.sort((a, b) => a.popularity - b.popularity).reverse()
    let newContacts = [...contacts]
    setContacts(newContacts)
  }

  const deleteContact = (contact) => {
    let celeb = contacts.find(el => el.id === contact.id)
    let index = contacts.indexOf(celeb)
    contacts.splice(index, 1)
    let newContacts = [...contacts]
    setContacts(newContacts)
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
            <td><button onClick={sortByName}>Sort By Name</button></td>
            <td><button onClick={sortByPop}>Sort By Popularity</button></td>
          </tr>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} height="100px" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => deleteContact(contact)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;