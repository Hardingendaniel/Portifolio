import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from '../src/pages/Home.js';
import Information from '../src/pages/Information.jsx';
import Contact from '../src/pages/Contacts.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<Information />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
