import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <p className="text-center">© 2024 Bitsafe. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="/privacy" className="text-gray-400">Privacy Policy</a>
        <a href="/terms" className="text-gray-400">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
