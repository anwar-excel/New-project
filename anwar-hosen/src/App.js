import React, {useState, useState } from 'react';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

useState(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setFriends(data))
}, [])

  return (
    <div >
      <h1>Friends : {friends.length}</h1>
    </div>
  );
}

export default App;
