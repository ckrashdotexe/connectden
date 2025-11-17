import { useState, useRef, useEffect } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'reels' | 'cinematics'>('photos');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const photos = [
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1024966/pexels-photo-1024966.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const reels = [
    { id: 1, video: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-snow-falling-638-small.mp4', thumbnail: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Winter Vibes' },
    { id: 2, video: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-green-field-2716-small.mp4', thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Nature\'s Beauty' },
    { id: 3, video: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-at-a-pier-2452-small.mp4', thumbnail: 'https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Golden Hour' },
    { id: 4, video: 'https://assets.mixkit.co/videos/preview/mixkit-city-lights-at-night-2628-small.mp4', thumbnail: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Urban Lights' },
    { id: 5, video: 'https://assets.mixkit.co/videos/preview/mixkit-colorful-abstract-shapes-5614-small.mp4', thumbnail: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Abstract Motion' },
    { id: 6, video: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-in-a-nightclub-1881-small.mp4', thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event Moments' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cinematics = [
    { id: 1, thumbnail: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Brand Campaign' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Corporate Event' },
    { id: 3, thumbnail: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Wedding Story' },
    { id: 4, thumbnail: 'https://images.pexels.com/photos/1128781/pexels-photo-1128781.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Product Launch' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Full <span className="text-[#FF6A00]">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg">Explore our complete collection</p>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          {[
            { key: 'photos', label: 'Photos' },
            { key: 'reels', label: 'Reels' },
            { key: 'cinematics', label: 'Cinematics' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/50'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'photos' && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(photo)}
                className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reels' && (
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {reels.map((reel) => (
                <div
                  key={reel.id}
                  className="flex-shrink-0 group relative w-80 aspect-[9/16] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setPlayingVideoId(reel.id)}
                >
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                    <Play className="w-20 h-20 text-[#FF6A00] mb-4" fill="currentColor" />
                    <p className="text-white font-semibold text-lg">{reel.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-[#FF6A00] hover:bg-[#FF8A3D] text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-[#FF6A00] hover:bg-[#FF8A3D] text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {activeTab === 'cinematics' && (
          <div className="space-y-6">
            {cinematics.map((cinematic) => (
              <div
                key={cinematic.id}
                className="group relative h-96 overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={cinematic.thumbnail}
                  alt={cinematic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{cinematic.title}</h3>
                  <Play className="w-12 h-12 text-[#FF6A00]" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-[#FF6A00] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {playingVideoId && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setPlayingVideoId(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-[#FF6A00] transition-colors"
            onClick={() => setPlayingVideoId(null)}
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-2xl aspect-[9/16] rounded-lg overflow-hidden">
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={reels.find(r => r.id === playingVideoId)?.video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
