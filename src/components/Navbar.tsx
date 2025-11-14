import { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Film className="w-8 h-8 text-[#FF6A00]" strokeWidth={2} />
            <span className="text-white font-bold text-2xl tracking-wider">CDF</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-[#FF6A00] transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-start justify-center h-full px-12 space-y-8">
          {[
            { label: 'Home', id: 'home' },
            { label: 'Portfolio', id: 'portfolio' },
            { label: 'About Us', id: 'about' },
            { label: 'Testimonials', id: 'testimonials' },
            { label: 'Contact Us', id: 'contact' }
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-2xl font-light hover:text-[#FF6A00] transition-all duration-300 hover:translate-x-2 opacity-0 animate-fadeInSlide"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
