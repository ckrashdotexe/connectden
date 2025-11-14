import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      project: 'Wedding Event',
      comment: 'ConnectDen Films captured our wedding day beautifully. Every moment was perfect, and the cinematic quality exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      project: 'Corporate Event',
      comment: 'Professional, creative, and reliable. They delivered exceptional footage for our annual conference. Highly recommend!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      project: 'Brand Photography',
      comment: 'The team understood our brand vision perfectly. The photos are stunning and have elevated our entire marketing presence.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      project: 'Product Commercial',
      comment: 'Our product launch video was incredible. The attention to detail and creative direction was exactly what we needed.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      project: 'Personal Portfolio',
      comment: 'Amazing experience! They made me feel comfortable and captured my personality perfectly. The results are breathtaking.',
      rating: 5
    },
    {
      name: 'James Thompson',
      project: 'Social Media Content',
      comment: 'Working with ConnectDen Films has transformed our social media presence. Their content consistently drives engagement.',
      rating: 5
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Client <span className="text-[#FF6A00]">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">What our clients say about us</p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-slow">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 mx-4"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:border-[#FF6A00]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#FF6A00]/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF6A00] text-[#FF6A00]" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-[#FF6A00] text-sm">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
