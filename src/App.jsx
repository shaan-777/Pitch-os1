import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import { useTheme } from './store/theme';
import { useAuthStore } from './store/auth';
import { Toaster } from './components/ui/toaster';
import { Footer } from './components/Footer';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

// Route guard for onboarding
function RequireOnboarding({ children }) {
  const { user, loading } = useAuthStore();
  const [checking, setChecking] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(null); // null: unknown, true: redirect to onboarding, false: redirect to dashboard
  const location = useLocation();
  const navigate = useNavigate ? useNavigate() : null;
  const db = getFirestore();

  useEffect(() => {
    if (!loading && user) {
      const checkOnboarding = async () => {
        const settingsRef = doc(db, 'userSettings', user.uid);
        const settingsSnap = await getDoc(settingsRef);
        if (settingsSnap.exists() && settingsSnap.data().onboardingCompleted) {
          setShouldRedirect(false); // completed
        } else {
          setShouldRedirect(true); // not completed
        }
        setChecking(false);
      };
      checkOnboarding();
    } else if (!user && !loading) {
      setChecking(false);
      setShouldRedirect(false); // not logged in, let route handle
    }
  }, [user, loading]);

  useEffect(() => {
    if (!checking && shouldRedirect !== null && navigate) {
      if (shouldRedirect && location.pathname !== '/onboarding') {
        navigate('/onboarding', { replace: true });
      } else if (!shouldRedirect && location.pathname === '/onboarding') {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [checking, shouldRedirect, location.pathname, navigate]);

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  return children;
}

function AppContent() {
  const location = useLocation();
  const { theme } = useTheme();
  const { initializeAuthListener } = useAuthStore();
  
  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, [initializeAuthListener]);
  
  // Hide navbar and footer on dashboard route
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isDashboard && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={
            <RequireOnboarding>
              <Dashboard />
            </RequireOnboarding>
          } />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
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