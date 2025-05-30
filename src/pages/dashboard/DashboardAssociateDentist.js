import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const DashboardAssociateDentist = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  // Function to handle logout
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          background: '#f4f4f4',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRight: '1px solid #ddd',
        }}
      >
        <div>
          <h2>Dashboard</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
            <Link to="/manage-appointment" state={{ userRole: "AssociateDentist" }} style={{ textDecoration: 'none', color: '#333' }}>
                Manage Appointment
            </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/patient-record" state={{ userRole: "AssociateDentist" }} style={{ textDecoration: 'none', color: '#333' }}>
                View Patient Record
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/inventory" state={{ userRole: "AssociateDentist" }} style={{ textDecoration: 'none', color: '#333' }}>
                Inventory
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: '#f44336',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardAssociateDentist;