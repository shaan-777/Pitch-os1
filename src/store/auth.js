import { create } from 'zustand';
import { auth } from '../firebase';
import { signInWithGoogle } from '../firebase'; // Make sure this import exists

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true,
  
  setUser: (user) => set({ user, loading: false }),
  
  signInWithGoogle: async () => {
    try {
      set({ loading: true });
      const user = await signInWithGoogle();
      set({ user, loading: false });
      return user;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await auth.signOut();
      // Clear onboarding status on logout
      localStorage.removeItem("onboardingCompleted");
      set({ user: null });
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
  
  initializeAuthListener: () => {
    return auth.onAuthStateChanged((user) => {
      console.log('Auth state changed:', user ? 'User logged in' : 'User logged out');
      set({ user, loading: false });
    });
  },

  // Add helper method to check if onboarding is completed
  isOnboardingCompleted: () => {
    return localStorage.getItem("onboardingCompleted") === "true";
  },

  // Add method to complete onboarding
  completeOnboarding: () => {
    localStorage.setItem("onboardingCompleted", "true");
  }
}));