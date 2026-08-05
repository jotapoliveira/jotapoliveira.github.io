
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Publications from './pages/Publications';
import Projects from './pages/Projects';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme with the document root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'education':
        return <Education />;
      case 'publications':
        return <Publications />;
      case 'projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 selection:bg-orange-500 selection:text-black">
      <Navbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      
      <main className="max-w-5xl mx-auto px-6">
        <div key={currentPage} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {renderPage()}
        </div>
      </main>
      
      <footer className="py-8 text-center border-t border-zinc-200 dark:border-zinc-900/60 mt-12">
        <p className="text-zinc-500 dark:text-zinc-600 text-xs mono">
          © {new Date().getFullYear()} João Oliveira
        </p>
      </footer>
    </div>
  );
};

export default App;
