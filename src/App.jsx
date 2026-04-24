import React, { useState } from 'react';
import './styles/theme.css';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Browse from './pages/Browse';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/layout/Sidebar';
import { Toast } from './components/common/Atoms';

function App() {
  const [page, setPage] = useState('landing'); // landing, auth, browse, dashboard
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
  };

  const handleLogin = (u) => {
    setUser(u);
    setPage('browse');
    showToast(`Welcome back, ${u.name}!`);
  };

  const navItems = [
    { id: 'browse', label: 'Browse Mentors', icon: '🔍' },
    { id: 'dashboard', label: 'My Sessions', icon: '📅' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const renderPage = () => {
    switch (page) {
      case 'landing':
        return <Landing onNav={setPage} onJoinWaitlist={() => showToast("Success! You're on the list.")} />;
      case 'auth':
        return <Auth onLogin={handleLogin} onNav={setPage} />;
      case 'browse':
        return <Browse user={user} onBookSuccess={() => showToast("Booking Confirmed!")} />;
      case 'dashboard':
        return <Dashboard user={user} />;
      default:
        return <div style={{ padding: 100, textAlign: 'center' }}>Coming Soon...</div>;
    }
  };

  const isPlatform = ['browse', 'dashboard', 'settings'].includes(page);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bgg)' }}>
      {isPlatform && (
        <Sidebar
          items={navItems}
          active={page}
          onNav={setPage}
          user={user}
        />
      )}

      <main style={{
        marginLeft: isPlatform ? 260 : 0,
        paddingTop: isPlatform ? 40 : 0,
        transition: 'margin 0.3s ease'
      }}>
        {renderPage()}
      </main>

      {toast && (
        <Toast
          msg={toast.msg}
          type={toast.type}
          onDone={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
