
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { ListOfUsers } from './ListOfUsers';
import { userData } from './UserList';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data))
      .catch(err => setError(err))
  }, [])
  return (
    <div className="App">
      <div className='card'>
        {data.map(user => {
          return <ListOfUsers key={user.id} user={user} />

        })}
      </div>
    </div>
  );
}

export default App;
