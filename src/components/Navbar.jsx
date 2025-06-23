import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { auth, signOutUser } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setIsOpen(false); // Close mobile menu after sign out
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  const renderAuthButtons = () => {
    if (loading) {
      return (
        <div className="animate-pulse bg-gray-200 h-6 w-16 rounded"></div>
      );
    }

    if (user) {
      const isGoogleUser = user.providerData.some(provider => provider.providerId === 'google.com');
      
      return (
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center space-x-2">
                  {isGoogleUser ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User size={20} className="text-gray-700" />
                  )}
                  <span className="text-gray-700 hidden sm:inline">
                    {user.displayName || user.email}
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-[60]">
                  <div className="w-48 p-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <LayoutDashboard size={16} />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <Settings size={16} />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      );
    }

    return (
      <>
        <Link 
          to="/login" 
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          Login
        </Link>
        <Link 
          to="/register" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          Register
        </Link>
      </>
    );
  };

  const renderMobileAuthButtons = () => {
    if (loading) {
      return (
        <div className="animate-pulse bg-gray-200 h-6 mx-4 my-2 rounded"></div>
      );
    }

    if (user) {
      // Check if user signed in with Google
      const isGoogleUser = user.providerData.some(provider => provider.providerId === 'google.com');
      
      return (
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="flex items-center space-x-2 mb-2">
            {isGoogleUser ? (
              <img 
                src={user.photoURL} 
                alt={user.displayName || 'User'} 
                className="w-6 h-6 rounded-full"
              />
            ) : (
              <User size={16} className="text-gray-700" />
            )}
            <span className="text-gray-700 text-sm">
              {user.displayName || user.email}
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            Sign Out
          </button>
        </div>
      );
    }

    return (
      <>
        <Link 
          to="/login" 
          className="block text-gray-700 hover:text-gray-900 px-4 py-2 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link 
          to="/register" 
          className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-4 mb-2 rounded text-center transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </>
    );
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-gray-800 text-2xl font-bold">
            PitchOS
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            {renderAuthButtons()}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-gray-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 relative z-[60]">
            {user && (
              <Link 
                to="/dashboard" 
                className="block text-gray-700 hover:text-gray-900 px-4 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {renderMobileAuthButtons()}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;