import { useState, useEffect } from 'react';
import { Film, Calendar, Smartphone, Building2, Heart, Video, Camera, Briefcase } from 'lucide-react';

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Film,
      title: 'Cinematic Filmmaking',
      description: 'High-end cinematic productions that tell compelling visual stories'
    },
    {
      icon: Calendar,
      title: 'Event Coverage',
      description: 'Comprehensive event documentation with professional quality'
    },
    {
      icon: Smartphone,
      title: 'Social Media Content',
      description: 'Engaging content optimized for social platforms and viral reach'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional coverage of corporate gatherings and conferences'
    },
    {
      icon: Heart,
      title: 'Wedding Events',
      description: 'Romantic storytelling that captures your special moments forever'
    },
    {
      icon: Video,
      title: 'Ads / Commercials',
      description: 'Creative commercial productions that drive brand engagement'
    },
    {
      icon: Camera,
      title: 'Product Photography',
      description: 'Stunning product visuals that elevate your brand presence'
    },
    {
      icon: Briefcase,
      title: 'Brand Photography',
      description: 'Cohesive brand imagery that tells your unique story'
    },
    {
      icon: Camera,
      title: 'Personal Portrait & Portfolio',
      description: 'Professional portraits and portfolios that showcase personality'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#FF6A00]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive visual solutions for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#FF6A00]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF6A00]/20 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-[#FF6A00] to-[#FF8A3D] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF6A00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
