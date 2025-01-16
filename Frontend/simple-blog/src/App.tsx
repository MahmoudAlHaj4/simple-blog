import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Authentication from './Pages/Authentication/auth';
import UserPage from './Pages/UserPage/userPage';
import { AuthProvider } from './Context/authContext';
import { CategoryProvider } from './Context/categoryContext';
import { PostProvider } from './Context/postsContext';


function App() {
  return (
    <div className="App">
      <Router> 
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/user" element={ <CategoryProvider><PostProvider><UserPage/></PostProvider></CategoryProvider>}   />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
