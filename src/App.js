import React from 'react';
import './App.css';
import PersonCard from './components/person';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName = { "Rithy" }
      lastName = { "Chan" }
      initialAge = { 21 }
      hairColor = { "Black" }
      />
      
      <PersonCard
      firstName = { "John" }
      lastName = { "Seagar" }
      initialAge = { 42 }
      hairColor = { "Brown" }
      />
      
      <PersonCard
      firstName = { "Elon" }
      lastName = { "Musk" }
      initialAge = { 51 }
      hairColor = { "Dark Brown" }
      />
      
      <PersonCard
      firstName = { "Jack" }
      lastName = { "Appleseed" }
      initialAge = { 53 }
      hairColor = { "Gray" }
      />
    </div>
  );
}

export default App;
