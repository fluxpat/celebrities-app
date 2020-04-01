import React, { useState } from 'react';
import './App.css';
import celebs from './contacts.json'

const App = () => {

  const [contacts, setContacts] = useState(celebs.slice(0, 5))

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