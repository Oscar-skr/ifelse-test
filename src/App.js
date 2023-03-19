import './App.css';
import Blogs from './components/Blogs/Blogs';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import BlogDetail from './components/BlogDetail/BlogDetail';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import Form from './Form/Form';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !=="/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Blogs />} />
        <Route path="/detail/:id" element={<BlogDetail />} />
        <Route path="/contacto" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
