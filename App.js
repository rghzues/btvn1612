import React, { useEffect, useState } from 'react'


function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() =>{
    setLoading = true;
    setError = null;

    axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((respond) => {
      setUser(respond.data);
      setLoading(false);
    })
    .catch((error) =>{
      setError(`Khong the tai danh sach nguoi dung`);
      setLoading(false);
    });
  }, []);
  return (
     
    <div>
      <h2>Hien thi danh sach nguoi dung</h2>
      
      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
  
  

    </div>
  )
}


export default App 