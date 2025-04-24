import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import ScrollToTopOnNavigate from '../common/ScrollToTopOnNavigate';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnNavigate />
      <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main className="flex-grow pt-[120px] md:pt-[140px]">
        <Outlet />
      </main>
      <Footer isMobileMenuOpen={isMobileMenuOpen} />
      <ScrollToTop isMobileMenuOpen={isMobileMenuOpen} />
    </div>
  );
};

export default Layout;
