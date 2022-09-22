import React, {useState, useEffect} from "react";
import 'antd/dist/antd.css';
import { Table } from 'antd';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => setUsers(response))
  },[])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['descend'],      
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ['descend'],  
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (address) => <span> {address.street} </span>,
      key: 'address',
    },
  ];

  return (
    <div className="App">
     <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default App;
