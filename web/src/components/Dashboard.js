import React from 'react';
import Sidebar from './reusable/Sidebar'; 
import './reusable/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="main-content">
        <header className="dashboard-header">
          <div className="header-title">
            <h2>Dashboard Overview</h2>
          </div>
          <div className="profile-section">
            <button className="profile-btn" onClick={() => navigate('/profile')}>
              <div className="profile-avatar">JD</div>
              <span>John Doe</span>
            </button>
          </div>
        </header>

        <section className="dashboard-body">
          <div className="empty-state">
            <p>Dashboard: Statistics and Overview will go here.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;