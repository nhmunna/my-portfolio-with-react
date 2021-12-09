import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
