import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from './pages/LandingPage';
import Post from './pages/Post';
import Article from './pages/Article';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/article' element={<Article />}>
        </Route>
        
        <Route path='/post/:id' element={<Post />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>

  )
}

export default App;
