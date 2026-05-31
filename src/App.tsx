import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GeneralServicesPage from './pages/GeneralServicesPage';
import CosmeticServicesPage from './pages/CosmeticServicesPage';
import OrthodonticsPage from './pages/OrthodonticsPage';
import NewPatientsPage from './pages/NewPatientsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/general" element={<GeneralServicesPage />} />
            <Route path="/services/cosmetic" element={<CosmeticServicesPage />} />
            <Route path="/services/orthodontics" element={<OrthodonticsPage />} />
            <Route path="/new-patients" element={<NewPatientsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;