import React from 'react';
import ItemList from './ItemList'; // Import the ItemList component
import Footer from "./footer"; // Import Footer Component
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <nav>
        <div className="logo">
          {/* Correct Image Path */}
          <img 
            src="/ELEGANT THTEADS.jpg" 
            alt="Logo" 
            style={{ height: '70px' }} 
          /> {/* Logo */}
        </div>

        {/* Navigation Links */}
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        
        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>


      {/* Header */}
      <header className="App-header">
        <h1>Welcome to Our Task Manager</h1>
        <p>Manage your tasks efficiently</p>
      </header>

 {/* ItemList Component */}
      <ItemList />  {/* This will render the list of items on the page */}

       <Footer /> {/* Replacing the previous footer */}
    </div>
  );
}

export default App;
