
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ITLayout from './components/ITLayout';
import SchoolLayout from './components/SchoolLayout';
import { ImageProvider } from './ImageContext';
import { ThemeProvider, useTheme } from './ThemeContext';

// Common Pages
import Blog from './pages/Blog';
import Team from './pages/Team';
import Portfolios from './pages/Portfolios';
import Store from './pages/Store';
import Contact from './pages/Contact';

// IT Specific Pages
import ITHome from './pages/it/ITHome';
import ITServices from './pages/it/ITServices';
import ITAbout from './pages/it/ITAbout';
import ITSolutions from './pages/it/ITSolutions';
import ITFAQ from './pages/it/ITFAQ';

// School Specific Pages
import SchoolHome from './pages/school/SchoolHome';
import SchoolPrograms from './pages/school/SchoolPrograms';
import SchoolAbout from './pages/school/SchoolAbout';
import SchoolAdmissions from './pages/school/SchoolAdmissions';
import SchoolFAQ from './pages/school/SchoolFAQ';

type World = 'welcome' | 'it' | 'school';

const AppContent: React.FC = () => {
  const [activeWorld, setActiveWorld] = useState<World>('welcome');
  const [currentPage, setCurrentPage] = useState('home');
  const { theme } = useTheme();

  useEffect(() => {
    const savedWorld = sessionStorage.getItem('activeWorld');
    const savedPage = sessionStorage.getItem('currentPage');
    if (savedWorld) setActiveWorld(savedWorld as World);
    if (savedPage) setCurrentPage(savedPage);
  }, []);

  const handleSetWorld = (world: World) => {
    setActiveWorld(world);
    setCurrentPage('home');
    sessionStorage.setItem('activeWorld', world);
    sessionStorage.setItem('currentPage', 'home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigation = (path: string) => {
    setCurrentPage(path);
    sessionStorage.setItem('currentPage', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync theme with the HTML element for Tailwind's dark: variant to work
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  if (activeWorld === 'welcome') {
    return <WelcomeScreen onEnter={handleSetWorld} />;
  }

  const renderContent = () => {
    if (activeWorld === 'it') {
      switch (currentPage) {
        case 'home': return <ITHome onNavigate={handleNavigation} />;
        case 'services': return <ITServices onNavigate={handleNavigation} />;
        case 'about': return <ITAbout onNavigate={handleNavigation} />;
        case 'solutions': return <ITSolutions onNavigate={handleNavigation} />;
        case 'faq': return <ITFAQ onNavigate={handleNavigation} />;
        case 'contact': return <Contact onNavigate={handleNavigation} activeWorld="it" />;
        case 'blog': return <Blog />;
        case 'team': return <Team />;
        case 'portfolios': return <Portfolios />;
        case 'store': return <Store />;
        default: return <ITHome onNavigate={handleNavigation} />;
      }
    } else {
      switch (currentPage) {
        case 'home': return <SchoolHome onNavigate={handleNavigation} />;
        case 'programs': return <SchoolPrograms onNavigate={handleNavigation} />;
        case 'about': return <SchoolAbout onNavigate={handleNavigation} />;
        case 'admissions': return <SchoolAdmissions onNavigate={handleNavigation} />;
        case 'faq': return <SchoolFAQ />;
        case 'contact': return <Contact onNavigate={handleNavigation} activeWorld="school" />;
        case 'blog': return <Blog />;
        case 'team': return <Team />;
        default: return <SchoolHome onNavigate={handleNavigation} />;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {activeWorld === 'it' ? (
        <ITLayout 
          currentPage={currentPage} 
          onNavigate={handleNavigation} 
          onSwitchWorld={() => handleSetWorld('school')}
        >
          {renderContent()}
        </ITLayout>
      ) : (
        <SchoolLayout 
          currentPage={currentPage} 
          onNavigate={handleNavigation} 
          onSwitchWorld={() => handleSetWorld('it')}
        >
          {renderContent()}
        </SchoolLayout>
      )}
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <ImageProvider>
      <AppContent />
    </ImageProvider>
  </ThemeProvider>
);

export default App;
