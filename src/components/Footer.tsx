import { Instagram, MessageCircle, Facebook, Film } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' }
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    { icon: MessageCircle, label: 'WhatsApp', url: 'https://whatsapp.com' },
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Film className="w-8 h-8 text-[#FF6A00]" strokeWidth={2} />
              <span className="text-white font-bold text-2xl tracking-wider">ConnectDen Films</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming moments into timeless stories through cinematic excellence and creative precision.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6A00] hover:border-[#FF6A00] transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ConnectDen Films. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
