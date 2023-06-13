import React from 'react';
import './App.css';
import PersonCard from './components/person';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName = { "Rithy" }
      lastName = { "Chan" }
      age = { "21" }
      hairColor = { "Black" }
      />
      
      <PersonCard
      firstName = { "John" }
      lastName = { "Seagar" }
      age = { "42" }
      hairColor = { "Brown" }
      />
      
      <PersonCard
      firstName = { "Elon" }
      lastName = { "Musk" }
      age = { "51" }
      hairColor = { "Dark Brown" }
      />
      
      <PersonCard
      firstName = { "Jack" }
      lastName = { "Appleseed" }
      age = { "53" }
      hairColor = { "Gray" }
      />
    </div>
  );
}

export default App;
