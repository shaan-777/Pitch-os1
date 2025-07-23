
<<<<<<< HEAD

// import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
=======
// import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

>>>>>>> ae1b615 (Initial commit)
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Onboarding from './pages/Onboarding';
<<<<<<< HEAD
=======
// import About from './pages/About';
// import PrivacyPolicy from './pages/privacypolicy';
// import TermsOfService from './pages/termsofservice';
// import Testimonials from './pages/testimonials';      // ✅ Added
// import Integrations from './pages/integrations';      // ✅ Added

>>>>>>> ae1b615 (Initial commit)
// import { useTheme } from './store/theme';
// import { useAuthStore } from './store/auth';
// import { Toaster } from './components/ui/toaster';
// import { Footer } from './components/Footer';
<<<<<<< HEAD
// import { doc, getDoc, getFirestore } from 'firebase/firestore';


=======

// import { doc, getDoc, getFirestore } from 'firebase/firestore';

// // ✅ Middleware component for onboarding checks
>>>>>>> ae1b615 (Initial commit)
// function RequireOnboarding({ children }) {
//   const { user, loading } = useAuthStore();
//   const [checking, setChecking] = useState(true);
//   const [onboardingStatus, setOnboardingStatus] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const db = getFirestore();

//   useEffect(() => {
//     let isMounted = true;
//     let timeoutId;

//     const checkOnboarding = async () => {
//       if (!user || loading) {
//         if (isMounted) setChecking(false);
//         return;
//       }

//       try {
//         const settingsRef = doc(db, 'userSettings', user.uid);
//         const settingsSnap = await getDoc(settingsRef);
//         const isCompleted = settingsSnap.exists() && settingsSnap.data().onboardingCompleted === true;

//         if (isMounted) {
//           setOnboardingStatus(isCompleted);
//           setChecking(false);
//         }
//       } catch (error) {
//         console.error('Error checking onboarding status:', error);
//         if (isMounted) setChecking(false);
//       }
//     };

//     timeoutId = setTimeout(checkOnboarding, 100);

//     return () => {
//       isMounted = false;
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [user, loading, db]);

//   useEffect(() => {
//     if (!checking && user && onboardingStatus !== null) {
//       const currentPath = location.pathname;
<<<<<<< HEAD

=======
>>>>>>> ae1b615 (Initial commit)
//       if (!onboardingStatus && currentPath !== '/onboarding') {
//         navigate('/onboarding', { replace: true });
//       } else if (onboardingStatus && currentPath === '/onboarding') {
//         navigate('/dashboard', { replace: true });
//       }
//     }
//   }, [checking, onboardingStatus, location.pathname, navigate, user]);

//   if (checking) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
<<<<<<< HEAD
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
=======
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
>>>>>>> ae1b615 (Initial commit)
//       </div>
//     );
//   }

<<<<<<< HEAD
//   if (!checking && (!user || onboardingStatus === true || location.pathname === '/onboarding')) {
=======
//   if (!checking && (!user || onboardingStatus || location.pathname === '/onboarding')) {
>>>>>>> ae1b615 (Initial commit)
//     return children;
//   }

//   return null;
// }

<<<<<<< HEAD

=======
// // ✅ Main route rendered inside Theme and Auth context
>>>>>>> ae1b615 (Initial commit)
// function AppContent() {
//   const location = useLocation();
//   const { theme } = useTheme();
//   const { initializeAuthListener } = useAuthStore();

//   useEffect(() => {
//     const unsubscribe = initializeAuthListener();
//     return () => unsubscribe();
//   }, [initializeAuthListener]);

//   const isDashboard = location.pathname === '/dashboard';

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       {!isDashboard && <Navbar />}
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/onboarding" element={<Onboarding />} />
<<<<<<< HEAD
=======
//           <Route path="/about" element={<About />} />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//           <Route path="/terms" element={<TermsOfService />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/integrations" element={<Integrations />} />  {/* ✅ NEW */}
>>>>>>> ae1b615 (Initial commit)
//           <Route
//             path="/dashboard"
//             element={
//               <RequireOnboarding>
//                 <Dashboard />
//               </RequireOnboarding>
//             }
//           />
//         </Routes>
//       </main>
//       {!isDashboard && <Footer />}
//     </div>
//   );
// }

<<<<<<< HEAD

=======
// // ✅ AppWrapper for Router context
>>>>>>> ae1b615 (Initial commit)
// function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

<<<<<<< HEAD

// function App() {
//   const { theme } = useTheme();
//   const location = useLocation();

=======
// // ✅ App for Theme wrapper
// function App() {
//   const { theme } = useTheme();
//   const location = useLocation();
>>>>>>> ae1b615 (Initial commit)
//   const isThemedRoute = ['/dashboard', '/onboarding'].includes(location.pathname);

//   return (
//     <div className={isThemedRoute ? theme : 'light'}>
//       <AppContent />
//       <Toaster />
//     </div>
//   );
// }

// export default AppWrapper;
<<<<<<< HEAD

=======
>>>>>>> ae1b615 (Initial commit)
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import About from './pages/About';
import PrivacyPolicy from './pages/privacypolicy';
import TermsOfService from './pages/termsofservice';
import Testimonials from './pages/testimonials';
import Integrations from './pages/integrations';

import { useTheme } from './store/theme';
import { useAuthStore } from './store/auth';
import { Toaster } from './components/ui/toaster';
import { Footer } from './components/Footer';

import { doc, getDoc, getFirestore } from 'firebase/firestore';

// Middleware for redirecting users based on onboarding status
function RequireOnboarding({ children }) {
  const { user, loading } = useAuthStore();
  const [checking, setChecking] = useState(true);
  const [onboardingStatus, setOnboardingStatus] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const checkOnboarding = async () => {
      if (!user || loading) {
        if (isMounted) setChecking(false);
        return;
      }
      try {
        const settingsRef = doc(db, 'userSettings', user.uid);
        const settingsSnap = await getDoc(settingsRef);
        const isCompleted = settingsSnap.exists() && settingsSnap.data().onboardingCompleted === true;

        if (isMounted) {
          setOnboardingStatus(isCompleted);
          setChecking(false);
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        if (isMounted) setChecking(false);
      }
    };

    timeoutId = setTimeout(checkOnboarding, 100);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [user, loading, db]);

  useEffect(() => {
    if (!checking && user && onboardingStatus !== null) {
      const currentPath = location.pathname;
      if (!onboardingStatus && currentPath !== '/onboarding') {
        navigate('/onboarding', { replace: true });
      } else if (onboardingStatus && currentPath === '/onboarding') {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [checking, onboardingStatus, location.pathname, navigate, user]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!checking && (!user || onboardingStatus || location.pathname === '/onboarding')) {
    return children;
  }

  return null;
}

// Main app content - routes and conditional layout
function AppContent() {
  const location = useLocation();
  const { initializeAuthListener } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, [initializeAuthListener]);

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
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route
            path="/dashboard"
            element={
              <RequireOnboarding>
                <Dashboard />
              </RequireOnboarding>
            }
          />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

// Top-level router wrapper
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

// Handles theming across routes
function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const isThemedRoute = ['/dashboard', '/onboarding'].includes(location.pathname);

  return (
    <div className={isThemedRoute ? theme : 'light'}>
      <AppContent />
      <Toaster />
    </div>
  );
}

export default AppWrapper;
