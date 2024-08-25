import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import OverviewCard from './Components/OverviewCard';
import './App.css';

function App() {
  return (
    <div className="bg-image d-flex flex-column min-vh-100">
      <NavigationBar />
      <div className="container mt-4">
        <OverviewCard />
      </div>
    </div>
  );
}

export default App;
