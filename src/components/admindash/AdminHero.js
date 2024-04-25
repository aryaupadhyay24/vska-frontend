import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHero.css';
const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Box 1: Student Management */}
      <div style={{ margin: '20px', padding: '20px', border: '5px solid #1eb2a6',borderRadius:"8px" }} className='ContentBocx'>
        <h2>Student Management</h2>
        <Link to="/user-list">
          <button className='ContentBocxButton btn btn-secondary'>Go</button>
        </Link>
      </div>

      {/* Box 2: Course Management */}
      <div style={{ margin: '20px', padding: '20px', border: '5px solid #1eb2a6',borderRadius:"8px" }} className='ContentBocx'>
        <h2>Course Management</h2>
        <Link to="/course-list">
          <button className='ContentBocxButton btn btn-secondary'>Go</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
