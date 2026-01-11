import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Contacts from './pages/Contacts';
import History from './pages/History';
import Napoleon from './pages/Napoleon';
import Medovik from './pages/Medovik';
import Cheesecake from './pages/Cheesecake';
import './styles.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cakes" element={<Cakes />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/history" element={<History />} />
              <Route path="/napoleon" element={<Napoleon />} />
              <Route path="/medovik" element={<Medovik />} />
              <Route path="/cheesecake" element={<Cheesecake />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
