import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Login from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import View from "./pages/View";

export default function App() {
  return (
    <React.Fragment>
      {/* <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/view">View</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </React.Fragment>
  );
}
