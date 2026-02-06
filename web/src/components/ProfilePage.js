import React, { useState, useEffect } from 'react';
import Sidebar from './reusable/Sidebar';
import './reusable/Dashboard.css';
import './reusable/Profile.css';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    birthdate: '1995-01-01',
    age: '31'
  });
  const [tempData, setTempData] = useState({ ...formData });

  // Handle input changes
  const handleChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  // Age calculation logic
  useEffect(() => {
    if (tempData.birthdate) {
      const today = new Date();
      const bday = new Date(tempData.birthdate);
      let calcAge = today.getFullYear() - bday.getFullYear();
      if (today.getMonth() < bday.getMonth() || (today.getMonth() === bday.getMonth() && today.getDate() < bday.getDate())) {
        calcAge--;
      }
      setTempData(prev => ({ ...prev, age: calcAge >= 0 ? calcAge : 0 }));
    }
  }, [tempData.birthdate]);

  const handleSave = () => {
    setFormData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="main-content">
        <header className="dashboard-header">
          <h2>User Profile</h2>
        </header>

        <section className="dashboard-body">
          <div className="profile-card">
            <div className="profile-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input 
                    name="fullName"
                    disabled={!isEditing}
                    value={tempData.fullName}
                    onChange={handleChange}
                    className={!isEditing ? "read-only-view" : ""}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    name="email"
                    disabled={!isEditing}
                    value={tempData.email}
                    onChange={handleChange}
                    className={!isEditing ? "read-only-view" : ""}
                  />
                </div>
              </div>

              <div className="form-row split">
                <div className="input-group">
                  <label>Birthdate</label>
                  <input 
                    type="date"
                    name="birthdate"
                    disabled={!isEditing}
                    value={tempData.birthdate}
                    onChange={handleChange}
                    className={!isEditing ? "read-only-view" : ""}
                  />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input value={tempData.age} readOnly className="read-only-view" />
                </div>
              </div>

              <div className="profile-actions">
                {!isEditing ? (
                  <div>
                    {user?.isGuest ? (
                      <div className="alert-guest">Guests cannot edit profiles.</div>
                    ) : (
                      <button className="btn-edit" onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="edit-controls">
                    <button className="btn-save" onClick={handleSave}>Save Changes</button>
                    <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;