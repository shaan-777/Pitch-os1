import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeToggle } from './components/ThemeToggle';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { useTheme } from './store/theme';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/toaster';
import Login from './pages/Login';

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="min-h-screen bg-background text-foreground">
        <Router>
          <header className="border-b">
            <div className="container mx-auto py-4 px-4 flex justify-between items-center">
              <Link to="/" className="text-xl font-bold">
                Pitch OS
              </Link>
              <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-6">
                  <Link to="/" className="text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#FFD64A] hover:text-gray-900">
                    Home
                  </Link>
                  <Link to="/register" className="text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#FFD64A] hover:text-gray-900">
                    Register
                  </Link>
                </nav>

              </div>
            </div>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </Router>
        <Toaster />
      </div>
    </div>
  );
}

export default App;