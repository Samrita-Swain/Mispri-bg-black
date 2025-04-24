import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import ScrollToTopOnNavigate from '../common/ScrollToTopOnNavigate';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnNavigate />
      <Header />
      <main className="flex-grow pt-[120px] md:pt-[140px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
