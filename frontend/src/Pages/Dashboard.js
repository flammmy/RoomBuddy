import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (userData.status === 0) {
      navigate("/myepin"); // Redirect to EPIN page
    }
  }, [userData, navigate]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar/>
      <main style={{ padding: '2rem' }}>
        <h2>Dashboard</h2>
      </main>
    </div>
  );
};

export default Dashboard;