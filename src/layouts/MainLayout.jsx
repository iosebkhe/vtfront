import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const MainLayout = () => {
  const location = useLocation();
  const isRoot = location.pathname === '/';

  return (
    <div>
      <div className='padding-inline-3rem'>
        {!isRoot && <Header />} {/* Render Header only if not at root */}
      </div>

      <Outlet /> {/* This is where nested routes will be rendered */}

      <Footer />
    </div>
  );
};

export default MainLayout;
