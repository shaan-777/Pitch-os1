import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import { useTheme } from './store/theme';
import { Toaster } from './components/ui/toaster';
import { Footer } from './components/Footer';

function AppContent() {
  const location = useLocation();
  const { theme } = useTheme();
  
  // Hide navbar on dashboard route
  const hideNavbar = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!hideNavbar && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Router>
        <AppContent />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;