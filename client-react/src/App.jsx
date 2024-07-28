import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const endpoint = 'http://localhost:3001/api/v1/users';
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>testing</h1>
      {users.data ? users.data.map((user) => {
        return (
          <div key={user.ID}>
            <h2>{user.username}</h2>
          </div>
        );
      }) : <p>Loading...</p>}
    </>
  )
}

export default App
