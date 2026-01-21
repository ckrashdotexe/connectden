import { useState, useRef } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'reels' | 'cinematics'>('photos');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartTime = useRef(0);
  const reelContainerRef = useRef<HTMLDivElement>(null);

  const photos = [
    { id: 1, src: '/images/photos/estele.jpg', alt: 'Estele Portfolio' },
    { id: 2, src: '/images/photos/theatre.jpg', alt: 'Theatre Portfolio' },
    { id: 3, src: '/images/photos/apparel.jpg', alt: 'Apparel Portfolio' },
    { id: 4, src: '/images/photos/apple.jpg', alt: 'Apple Portfolio' },
    { id: 5, src: '/images/photos/apple02.jpg', alt: 'Apple Project 2' },
    { id: 6, src: '/images/photos/mca.jpg', alt: 'MCA Portfolio' },
    { id: 7, src: '/images/photos/pastry.jpg', alt: 'Pastry Portfolio' },
    { id: 8, src: '/images/photos/superdry.jpg', alt: 'Superdry Portfolio' },
  ];

  const reels = [
    { id: 1, video: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-snow-falling-638-small.mp4', thumbnail: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Winter Vibes' },
    { id: 2, video: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-green-field-2716-small.mp4', thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Nature\'s Beauty' },
    { id: 3, video: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-at-a-pier-2452-small.mp4', thumbnail: 'https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Golden Hour' },
    { id: 4, video: 'https://assets.mixkit.co/videos/preview/mixkit-city-lights-at-night-2628-small.mp4', thumbnail: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Urban Lights' },
    { id: 5, video: 'https://assets.mixkit.co/videos/preview/mixkit-colorful-abstract-shapes-5614-small.mp4', thumbnail: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Abstract Motion' },
    { id: 6, video: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-in-a-nightclub-1881-small.mp4', thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event Moments' },
  ];

  const handleReelPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;
    setIsDragging(true);
    dragStartX.current = e.clientX || 0;
    dragStartTime.current = Date.now();
    setDragX(0);
  };

  const handleReelPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.clientX || 0;
    setDragX(currentX - dragStartX.current);
  };

  const handleReelPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = dragX;
    const dragDuration = Date.now() - dragStartTime.current;
    const velocity = Math.abs(dragDistance) / dragDuration;
    const threshold = 30;
    const velocityThreshold = 0.1;

    if (Math.abs(dragDistance) > threshold || velocity > velocityThreshold) {
      if (dragDistance > 0) {
        // Swipe right → previous reel (with looping)
        setActiveReelIndex((activeReelIndex - 1 + reels.length) % reels.length);
      } else if (dragDistance < 0) {
        // Swipe left → next reel (with looping)
        setActiveReelIndex((activeReelIndex + 1) % reels.length);
      }
    }
    setDragX(0);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setLightboxImage(photo.src)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-black aspect-[4/3] shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reels' && (
          <div className="relative w-full flex items-center justify-center">
            <div
              ref={reelContainerRef}
              onPointerDown={handleReelPointerDown}
              onPointerMove={handleReelPointerMove}
              onPointerUp={handleReelPointerUp}
              onPointerLeave={handleReelPointerUp}
              className="relative w-full max-w-sm h-auto flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            >
              <div className="relative w-full aspect-[9/16]">
                {reels.map((reel, index) => {
                  // Calculate offset with wrapping for infinite loop
                  let offset = index - activeReelIndex;
                  
                  // Normalize offset to handle infinite looping
                  if (offset > reels.length / 2) {
                    offset -= reels.length;
                  } else if (offset < -reels.length / 2) {
                    offset += reels.length;
                  }
                  
                  const isActive = offset === 0;
                  const translateX = offset * 100 + (isDragging && isActive ? dragX / 4 : 0);
                  const scale = isActive ? 1 : 0.85;
                  const opacity = Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.3;
                  const zIndex = 10 - Math.abs(offset);

                  return (
                    <div
                      key={reel.id}
                      className="absolute inset-0 w-full aspect-[9/16]"
                      style={{
                        transform: `translateX(${translateX}%) scale(${scale})`,
                        opacity,
                        zIndex,
                        transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out',
                      }}
                    >
                      <div
                        className="w-full h-full group relative overflow-hidden rounded-2xl cursor-pointer bg-black shadow-2xl"
                        onClick={() => isActive && setPlayingVideoId(reel.id)}
                      >
                        <img
                          src={reel.thumbnail}
                          alt={reel.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          draggable={false}
                        />
                        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 flex flex-col items-center justify-center ${
                          isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-60'
                        }`}>
                          <Play className="w-16 h-16 text-[#FF6A00] mb-3" fill="currentColor" />
                          <p className="text-white font-semibold text-base">{reel.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Left navigation button - always visible in infinite loop */}
            <button
              onClick={() => setActiveReelIndex((activeReelIndex - 1 + reels.length) % reels.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 z-20 bg-[#FF6A00] hover:bg-[#FF8A3D] text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right navigation button - always visible in infinite loop */}
            <button
              onClick={() => setActiveReelIndex((activeReelIndex + 1) % reels.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 z-20 bg-[#FF6A00] hover:bg-[#FF8A3D] text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
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
