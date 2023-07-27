import React,{useState} from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(false);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const userdata = await response.json();
      setUsers(userdata.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
   setLoading(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className='user-nav'>
          SNAPPY USERS
        </nav>
        <button className='user-btn' onClick={()=>loadUsers()}>Get Users</button>
       </header>

      
      {loading?(<div className='loader'>Loading</div>
      ):(<div className="user-grid">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
        )}
    </div>
  );
}

export default App;
