import { Sparkles } from 'lucide-react';
import { FaXTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#HowItWorksSection" },
        { name: "Personas", href: "#personas" },
        { name: "Pricing", href: "#support" },
        { name: "API", href: "https://groq.com/" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/" },
        { name: "Blog", href: "/" },
        { name: "Careers", href: "/" },
        { name: "Press", href: "/" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/doc" },
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Feedback", href: "/feedback" },
      ]
    }
  ];

  const socialLinks = [
    { name: "X (Twitter)", icon: <FaXTwitter />, href: "", target: "_blank" },
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/parichawla", target: "_blank" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com/in/pari-chawla4", target: "_blank" },
    { name: "Discord", icon: <FaDiscord />, href: "", target: "_blank" }
  ];

  return (
    <footer className="relative text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center gap-8 mb-12">
          {/* Brand Section */}
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Your Persona</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dive deep into timeless knowledge, explore diverse perspectives, and discover ideas that shaped generations — all through immersive, lifelike conversations designed to expand your understanding of the world
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300 group border border-slate-600"
                  aria-label={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform text-gray-300 group-hover:text-white">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>


        </div>
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 flex flex-col items-center justify-center space-y-2">
          <p className="text-gray-400 text-sm opacity-80">
            {new Date().getFullYear()} Your Persona. Made with love for curious minds by Pari chawla.
          </p>
        </div>
      </div>

      {/* Background Decorative Elements - Same as other sections */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30"></div>
    </footer>
  );
};

export default Footer;