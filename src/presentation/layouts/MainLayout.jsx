// import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer"
import Header from '../components/Header';

const MainLayout = ({children}) => {
    
    const HeaderWrapper = () => {
        /* Hide Header on login page */
        const location = useLocation(); // Get the current route
        return location.pathname !== '/login' && <Header />
    }
    const FooterWrapper = () => {
        /* Hide Footer on login page */
        const location = useLocation(); // Get the current route
        return location.pathname !== '/login' && <Footer />
    }

    return (
        <div>
            <HeaderWrapper />
            <main>
                {children}
            </main>
            <FooterWrapper />
        </div>
    ) 
}
export default MainLayout;