import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MessageSquare, MapPin, Award } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-navy-surface dark:text-navy-muted border-t border-gray-800 dark:border-navy-card pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Identity & Trust */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoImg} alt="Krupa Sindhu Logo" className="h-10 w-auto rounded border border-gray-700" />
              <div>
                <h3 className="text-lg font-extrabold text-brand-red tracking-tight">KRUPASINDHU</h3>
                <p className="text-xs text-gray-400">Softwares & Advertisement Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-400 dark:text-navy-muted">
              ISO 9001:2015 Certified technology and training organization established in 2018 under Director Vivek Dange. Delivering enterprise software, digital advertising, and high-impact student internships.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-950/60 border border-green-800 text-green-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              ISO 9001:2015 Certified Quality System
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us & Leadership</Link></li>
              <li><Link to="/team" className="hover:text-brand-red transition-colors">Our Team & Certifications</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Software & Marketing Services</Link></li>
              <li><Link to="/products" className="hover:text-brand-red transition-colors">IT Products & Solutions</Link></li>
              <li><Link to="/internship" className="hover:text-brand-red transition-colors">Internship Catalog</Link></li>
              <li><Link to="/careers" className="hover:text-brand-red transition-colors">Careers & Job Openings</Link></li>
              <li><Link to="/admin" className="hover:text-brand-gold font-bold transition-colors">Database Inspector / Admin</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-2">
              Internship Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/internship" className="hover:text-brand-red transition-colors">Web Development (React.js & Node.js)</Link></li>
              <li><Link to="/internship" className="hover:text-brand-red transition-colors">Python Programming</Link></li>
              <li><Link to="/internship" className="hover:text-brand-red transition-colors">Java Full Stack Development</Link></li>
              <li><Link to="/internship" className="hover:text-brand-red transition-colors">Software Testing (Manual & Automation)</Link></li>
              <li><Link to="/internship" className="hover:text-brand-red transition-colors">Digital Marketing with AI Tools</Link></li>
            </ul>
          </div>

          {/* Column 4: Official Contact Info */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-2">
              Official Office
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <div>
                <span className="block text-gray-500 text-[10px]">Address</span>
                <span className="text-white font-medium text-[11px] leading-tight block">
                  Nandigram Housing Society, behind sharada nagar, Anand Nagar, Nanded, MH 431605
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <div>
                <span className="block text-gray-500 text-[10px]">Official Email</span>
                <a href="mailto:admin@krupasindhu.org.in" className="text-white hover:text-brand-red font-medium">admin@krupasindhu.org.in</a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <div>
                <span className="block text-gray-500 text-[10px]">Phone / Call</span>
                <a href="tel:+917350570999" className="text-white hover:text-brand-red font-medium">+91 7350570999</a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-gray-500 text-[10px]">Official WhatsApp</span>
                <a href="https://wa.me/917350570999" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-medium">+91 7350570999</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-6 border-t border-gray-800 dark:border-navy-card flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-navy-muted gap-3">
          <div>
            © {new Date().getFullYear()} Krupa Sindhu Advertising & Software Pvt. Ltd. All rights reserved. (Est. 2018 | Director: Vivek Dange)
          </div>
          <div className="flex space-x-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">ISO Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
