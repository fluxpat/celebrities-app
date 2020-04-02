import React, { useState } from 'react';
import './App.css';
import celebs from './contacts.json'

import Button from 'react-bootstrap/Button'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    <div className="App" >
      <table className="table-content">
        <thead>
          <tr>
            <th colspan="4" className="title">Celebrities Tracker</th>
          </tr>
          <tr>
            <td>Profile</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
          <tr className="control-row">
            <td><Button variant="primary" onClick={addContact}>Add Random Celebrity</Button></td>
            <td><Button variant="success" onClick={sortByName}>Sort By Name</Button></td>
            <td><Button variant="success" onClick={sortByPop}>Sort By Popularity</Button></td>
          </tr>
            <TransitionGroup component={null}>
              {contacts.map(contact => {
                return (
                  <CSSTransition key={contact.id} timeout={500} classNames="celebrity">
                    <tr className="celebrity-row">
                      <td><img className="celebrity-image" src={contact.pictureUrl} alt={contact.name} height="100px" /></td>
                      <td className="celebrity-name">{contact.name}</td>
                      <td>{contact.popularity.toFixed(2)}</td>
                      <td className="delete-button"><Button variant="light" onClick={() => deleteContact(contact)}><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd" />
                      </svg></Button></td>
                    </tr>
                  </CSSTransition>
                )
              })}
            </TransitionGroup>

        </tbody>
      </table>
    </div>
  );
}

export default App;