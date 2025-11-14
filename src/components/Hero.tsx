import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-professional-cameraman-recording-in-a-studio-34363-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <div className={`transform transition-all duration-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider">
            CONNECTDEN <span className="text-[#FF6A00]">FILMS</span>
          </h1>
        </div>

        <div className={`transform transition-all duration-1500 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl">
            Transforming moments into timeless stories
          </p>
        </div>

        <div className={`transform transition-all duration-1500 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToContact}
            className="px-12 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FF8A3D] text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
