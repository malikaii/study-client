import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div className="container">
        <div className="card text-center" id="card-id">
        <div className="card-body">
            <h5 className="card-title">Welcome to Study</h5>
            <p className="card-text">Click below to create a new set</p>
            <Link to='/createset' className="btn btn-primary">Start</Link>
        </div>
        </div>
    </div>
  )
}

export default Home;