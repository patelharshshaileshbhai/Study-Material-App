import React from "react";
import { Link } from 'react-router-dom';
import "../screens/Study.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './Study_m.css'
const Study_Material = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="p-3 m-5 border border-3 border rounded-2 d-flex align-items-center justify-content-center align-items-center bg-dark text-light p-4 rounded-3 study-material-container">
            <Link to="/material" className="text-light text-decoration-none">
              <h1 className="heading mb-4 w-100">Study Materials</h1>
            </Link>
          </div>
        </div>
      </>
    );
};

export default Study_Material;
