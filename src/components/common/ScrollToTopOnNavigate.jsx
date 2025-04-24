import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will automatically scroll to the top when navigating between pages
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTopOnNavigate;
