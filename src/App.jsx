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
  const [shouldRedirect, setShouldRedirect] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    let isMounted = true;

    const checkOnboarding = async () => {
      if (!user || loading) {
        if (isMounted) {
          setChecking(false);
          setShouldRedirect(false);
        }
        return;
      }

      try {
        console.log('Checking onboarding status for user:', user.uid);
        const settingsRef = doc(db, 'userSettings', user.uid);
        const settingsSnap = await getDoc(settingsRef);
        
        const isCompleted = settingsSnap.exists() && settingsSnap.data().onboardingCompleted === true;
        console.log('Onboarding status:', isCompleted);
        
        if (isMounted) {
          setShouldRedirect(!isCompleted);
          setChecking(false);
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        // On error, don't redirect to be safe
        if (isMounted) {
          setShouldRedirect(false);
          setChecking(false);
        }
      }
    };

    checkOnboarding();
    return () => {
      isMounted = false;
    };
  }, [user, loading, db]);

  useEffect(() => {
    if (!checking && shouldRedirect !== null && user) {
      console.log('Current path:', location.pathname);
      console.log('Should redirect to onboarding:', shouldRedirect);
      
      if (shouldRedirect && location.pathname !== '/onboarding') {
        console.log('Redirecting to onboarding');
        navigate('/onboarding', { replace: true });
      } else if (!shouldRedirect && location.pathname === '/onboarding') {
        console.log('Redirecting to dashboard');
        navigate('/dashboard', { replace: true });
      }
    }
  }, [checking, shouldRedirect, location.pathname, navigate, user]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
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