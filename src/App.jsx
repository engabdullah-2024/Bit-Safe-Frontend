import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SendCrypto from './components/SendCrypto';
import ReceiveCrypto from './components/ReceiveCrypto';
import TransactionHistory from './components/TransactionHistory';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';  // Import the Header

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />  {/* Include the Header here */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/send" element={<SendCrypto />} />
            <Route path="/receive" element={<ReceiveCrypto />} />
            <Route path="/transactions" element={<TransactionHistory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
