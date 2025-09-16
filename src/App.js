import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import Homepage from './components/HomePage';

function App() {
  return (
    
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg hidden md:block">
          <Sidebar />
        </div>

        {/* Main Panel */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <MainPanel/>
          
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
