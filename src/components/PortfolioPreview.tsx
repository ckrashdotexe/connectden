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
      { id: 1, src: '/images/photos/estele.jpg', alt: 'Estele Portfolio' },
      { id: 2, src: '/images/photos/theatre.jpg', alt: 'Theatre Portfolio' },
      { id: 3, src: '/images/photos/apple.jpg', alt: 'Apple Portfolio' },
      { id: 4, src: '/images/photos/apple02.jpg', alt: 'Apple Project 2' },
      { id: 5, src: '/images/photos/pastry.jpg', alt: 'Pastry Portfolio' },
      { id: 6, src: '/images/photos/mca.jpg', alt: 'MCA Portfolio' },
      { id: 7, src: '/images/photos/apparel.jpg', alt: 'Apparel Portfolio' },
      { id: 8, src: '/images/photos/superdry.jpg', alt: 'Superdry Portfolio' },
    ];

  const brands = [
  "nike",
  "adidas",
  "canon",
  "sony",
  "nikon",
  "apple",
  "samsung",
  "google",
  "microsoft",
  "amazon",
  "spotify",
  "netflix",
  "tesla",
  "bmw",
  "mercedes"
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

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {portfolioImages.map((img) => (
              <div
                key={img.id}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer bg-black shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
