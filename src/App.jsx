import React, { Component } from 'react';
import NavBar from './componets/NavBar';
import News from './componets/News';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<News pageSize={5} country="us" category="general" />} />
          <Route path="/business" element={<News pageSize={5} country="us" category="business" />} />
          <Route path="/entertainment" element={<News pageSize={5} country="us" category="entertainment" />} />
          <Route path="/general" element={<News pageSize={5} country="us" category="general" />} />
          <Route path="/health" element={<News pageSize={5} country="us" category="health" />} />
          <Route path="/science" element={<News pageSize={5} country="us" category="science" />} />
          <Route path="/sports" element={<News pageSize={5} country="us" category="sports" />} />
          <Route path="/technology" element={<News pageSize={5} country="us" category="technology" />} />
        </Routes>
      </Router>
    );
  }
}