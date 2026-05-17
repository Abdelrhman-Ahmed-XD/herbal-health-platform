import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AIChat from './components/AIChat.jsx';
import HomePage from './pages/HomePage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import SubcategoryPage from './pages/SubcategoryPage.jsx';
import PlantDetailPage from './pages/PlantDetailPage.jsx';
import QuestionnairePage from './pages/QuestionnairePage.jsx';
import AboutPage from './pages/AboutPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"                        element={<HomePage />} />
          <Route path="/categories"              element={<CategoriesPage />} />
          <Route path="/category/:id"            element={<CategoryPage />} />
          <Route path="/category/:id/:subId"     element={<SubcategoryPage />} />
          <Route path="/plant/:id"               element={<PlantDetailPage />} />
          <Route path="/questionnaire"           element={<QuestionnairePage />} />
          <Route path="/about"                   element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppShell />
      </BrowserRouter>
    </LanguageProvider>
  );
}
