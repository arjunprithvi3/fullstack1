import React from 'react';

function OverviewCard() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="card" style={{ width: '48rem', height: '30rem' }}> {/* Adjust width and height here */}
        <div className="card-header">
          <h5>Food Management</h5>
        </div>
        <div className="card-body">
          <h3>Excess Food Management and Donation System</h3>
          <div className="card-text">
           
          </div>
          <a href="./" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
