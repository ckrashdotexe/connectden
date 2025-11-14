import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-[#FF6A00]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg">Where creativity meets precision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative h-[500px] rounded-lg overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Behind the scenes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6A00]/30 to-transparent" />
            </div>
          </div>

          <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-3xl font-bold text-[#FF6A00] mb-6">About ConnectDen Films</h3>

              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                ConnectDen Films is a creative visual production studio committed to transforming moments into timeless stories. Our focus spans cinematic filmmaking, premium photography, and high-impact digital content. Founded with the vision of pushing creative boundaries, we specialize in crafting visuals that blend emotion, storytelling, and technical precision.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                With a passion for detail and an eye for aesthetics, we partner with individuals, brands, and businesses to deliver work that resonates. Every frame we capture reflects our dedication to authenticity, creativity, and excellence.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-[#FF6A00]/20 to-transparent p-6 rounded-lg border border-[#FF6A00]/30">
                  <h4 className="text-4xl font-bold text-[#FF6A00] mb-2">500+</h4>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-[#FF6A00]/20 to-transparent p-6 rounded-lg border border-[#FF6A00]/30">
                  <h4 className="text-4xl font-bold text-[#FF6A00] mb-2">200+</h4>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
