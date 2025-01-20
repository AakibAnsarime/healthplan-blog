import { useState } from 'react';
import { FaBars, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className="sticky top-0 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md z-50">
        <Link to="/" className='w-52 font-bold hover:scale-105 transition-all'>
        My Health Plan
      </Link>
        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
        <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
          <Link to="/category/Workout Routines">Workout Routines</Link>
        </li>
        <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
          <Link to="/category/Healthy Recipes">Healthy Recipes</Link>
        </li>
      </ul>
        <div className="relative hidden xl:flex items-center justify-center gap-3">
        <a href="#" className="text-2xl text-blue-500 hover:text-blue-700 transition-all">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl text-blue-500 hover:text-blue-700 transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl text-pink-500 hover:text-pink-700 transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl text-blue-500 hover:text-blue-700 transition-all">
            <FaLinkedin />
          </a>
        </div>
        <i onClick={() => setIsMenuOpen(!isMenuOpen)} className='bx bx-menu xl:hidden block text-5xl cursor-pointer'><FaBars /></i>
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Posts</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact</li>
        </div>
      </header>
  )
}

export default App
