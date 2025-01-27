import { useState } from 'react';
import { FaBars, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className="sticky top-0 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md z-50">
        <Link to="/" className="flex items-center gap-1 w-52 font-bold hover:scale-105 transition-all">
        <img src="/logo.svg" alt="Logo" className="h-10" />
        My Health Plan
      </Link>
        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
        <li className='p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-pointer'>
          <Link to="/category/Health/">Health</Link>
        </li>
        <li className='p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-pointer'>
          <Link to="/category/Fitness/">Fitness</Link>
        </li>
        <li className='p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-pointer'>
          <Link to="/about-us/">About Us</Link>
        </li>
        <li className='p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-pointer'>
          <Link to="/contact-us/">Contact Us</Link>
        </li>
      </ul>
        <div className="relative hidden xl:flex items-center justify-center gap-3">
        <a href="https://www.facebook.com/people/My-health-plan/61565833672012/" className="text-2xl text-blue-500 hover:text-blue-700 transition-all">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/@AakibAnsarime/" className="text-2xl text-blue-500 hover:text-blue-700 transition-all">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/dailygta420/profilecard/?igsh=NTQzOGJxb2hhZmY2" className="text-2xl text-pink-500 hover:text-pink-700 transition-all">
            <FaInstagram />
          </a>
        </div>
        <i
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`bx bx-menu xl:hidden block text-5xl cursor-pointer ${isMenuOpen ? 'pointer-events-none' : ''}`}
        >
          <FaBars />
        </i>

        <div
  className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all transform ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
>
  <li className='list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer'>
    <Link to="/category/Health/">Health</Link>
  </li>
  <li className='list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer'>
    <Link to="/category/Fitness/">Fitness</Link>
  </li>
  <li className='list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer'>
    <Link to="/about-us/">About Us</Link>
  </li>
  <li className='list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer'>
    <Link to="/contact-us/">Contact Us</Link>
  </li>
</div>

      </header>
  )
}

export default App
