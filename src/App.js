import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ParticleReact from './components/ParticleReact/ParticleReact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import SingleBlog from './components/SingleBlog/SingleBlog';

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
          <Route path="/blog/:blogId" element={<SingleBlog></SingleBlog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
      <ParticleReact></ParticleReact>
    </div>
  );
}

export default App;
