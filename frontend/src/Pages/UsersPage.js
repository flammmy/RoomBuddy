import Sidebar from "../Common/Sidebar";
import { useState, useEffect } from "react";
import '../Common/Style.css'
import Table from 'react-bootstrap/Table';
import {FaTrash} from 'react-icons/fa';


const Userspage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4500/viewusers");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try{ 
       await fetch(`http://localhost:4500/deleteuser/${id}` , {method: 'DELETE' });
      setData(data.filter(user => user._id !== id));

    } catch (error) {
      console.error("Something went wrong" , error);
    };
  };



  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "2rem" }}>
        <div className="main-heading">
          <h2>Users</h2>
        </div>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Authority</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
{data.map((user, index) =>(
        <tr key={user.id}>
         <td>{index+1}</td>
         <td>{user.username}</td>
         <td>{user.authority}</td>
         <td>
          <FaTrash 
          style={{cursor:"pointer", color: "red"}}
         onClick={() =>(handleDelete(user._id))}
          />
         </td>
        </tr>
        ))}
      </tbody>
    </Table>
    
      </main>
    </div>
  );
};

export default Userspage;
