import React from 'react'
import './App.css';

import { useState } from 'react'
import Data from './Compoents/Data';
import List from './Compoents/List';
function App() {
  const [people, setPeople] = useState(Data);

  return (
    <div>
      <main className="container text-center">
        <h1>Brithday List</h1>
        <List people={people} />
        <button type="button" class="btn btn-outline-primary" onClick={() => setPeople([])}>Clear List</button>
      </main>
    </div>
  )
}

export default App
