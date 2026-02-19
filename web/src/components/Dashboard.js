import React from 'react';
import Sidebar from './reusable/Sidebar'; 
import './reusable/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // 1. Import Auth Context

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // 2. Get the user state

  // Helper to get initials (e.g., "John Doe" -> "JD")
  const getInitials = (name) => {
    if (!name) return "G";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  };

  // Determine Display Name
  const displayName = user?.isGuest ? "Guest User" : (user?.email || "User");
  
  // Determine Avatar Text
  const avatarText = user?.isGuest ? "G" : getInitials(displayName);

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="main-content">
        <header className="dashboard-header">
          <div className="header-title">
            <h2>Dashboard Overview</h2>
          </div>
          
          {/* 3. Dynamic Profile Section */}
          <div className="profile-section">
            <button className="profile-btn" onClick={() => navigate('/profile')}>
              
              {/* Avatar Circle */}
              <div className={`profile-avatar ${user?.isGuest ? 'guest-avatar' : ''}`}>
                {avatarText}
              </div>
              
              {/* Name Label */}
              <span>{displayName}</span>
            </button>
          </div>
        </header>

        <section className="dashboard-body">
          <div className="empty-state">
            <p>Dashboard: Statistics and Overview will go here.</p>
            {user?.isGuest && (
                <small style={{display: 'block', marginTop: '10px', color: '#666'}}>
                    (You are viewing this as a Guest. Some features may be limited.)
                </small>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;