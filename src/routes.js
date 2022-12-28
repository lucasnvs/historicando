import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import ScrollToTop from './components/ScrollToTop';

import LandingPage from './pages/LandingPage';
import Post from './pages/Post';
import Article from './pages/Article';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/article' element={<Article />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/about' element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>

  )
}

export default App;
