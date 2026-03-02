import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Terms from './pages/Terms';
import SellerProfile from './pages/SellerProfile';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      {/* We use a flexbox wrapper to ensure the footer stays at 
        the bottom even if the page content is short. 
      */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        
        {/* The Navbar stays at the top of every page */}
        <Navbar />
        
        {/* Main Content Area */}
        <main style={{ flex: '1', padding: '20px' }}>
          <Switch>
            {/* Route for the landing page/product gallery */}
            <Route exact path="/" component={Home} />
            
            {/* Routes for our footer links */}
            <Route path="/about" component={AboutUs} />
            <Route path="/terms" component={Terms} />
            
            {/* Route for the login/signup system */}
            <Route path="/login" component={AuthPage} />
            
            {/* Dynamic Route for individual seller profiles */}
            <Route path="/seller/:id" component={SellerProfile} />
            
            {/* Automatic Redirect: If the user types a URL that doesn't exist, 
              send them back to the Home page.
            */}
            <Redirect to="/" />
          </Switch>
        </main>

        {/* The Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
