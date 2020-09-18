import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/user').then(response => {
      setUsers(response.data);
    })
  }, []);

  return (
    <div className="App">
      { users.map(user => <p>user.name</p>) }
    </div>
  );
}

export default App;
