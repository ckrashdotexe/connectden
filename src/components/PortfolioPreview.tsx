import { useState, useEffect } from 'react';

const PortfolioPreview = () => {
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
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio-preview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const portfolioImages = [
    { id: 1, url: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800', span: 'md:row-span-2' },
    { id: 2, url: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, url: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800', span: 'md:col-span-2' },
    { id: 5, url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 6, url: 'https://images.pexels.com/photos/1128781/pexels-photo-1128781.jpeg?auto=compress&cs=tinysrgb&w=800', span: 'md:row-span-2' },
    { id: 7, url: 'https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 8, url: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=800', span: 'md:col-span-2' },
  ];

  const brands = [
    'Nike', 'Adidas', 'Canon', 'Sony', 'Nikon', 'Apple', 'Samsung', 'Google',
    'Microsoft', 'Amazon', 'Spotify', 'Netflix', 'Tesla', 'BMW', 'Mercedes'
  ];

  return (
    <section id="portfolio-preview" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#FF6A00]">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg">Moments captured, stories told</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {portfolioImages.map((img) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-lg ${img.span || ''} h-64 cursor-pointer`}
            >
              <img
                src={img.url}
                alt={`Portfolio ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden py-12">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center mx-12 text-3xl font-bold text-white/20 hover:text-[#FF6A00]/60 transition-colors duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
