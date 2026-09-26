import React, { useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';
import { Mail, Phone, MessageSquare, MapPin, ShieldCheck, Award } from 'lucide-react';

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fullAddress = "Nandigram Housing Society, behind sharada nagar, Anand Nagar, Nanded, Maharashtra 431605";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeading
        badge="Connect With Us"
        title="Official Contact & Office Location"
        subtitle="Get in touch with Krupa Sindhu Advertising & Software Pvt. Ltd. for software engineering projects, digital campaigns, or internship enrollments."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Corporate Contact Details</h3>

            {/* Email Card */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Official Email</span>
                <a href="mailto:admin@krupasindhu.org.in" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-brand-red transition-colors">
                  admin@krupasindhu.org.in
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Phone / Call</span>
                <a href="tel:+917350570999" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-brand-red transition-colors">
                  +91 7350570999
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Official WhatsApp</span>
                <a
                  href="https://wa.me/917350570999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-bold text-green-600 dark:text-green-400 hover:underline"
                >
                  +91 7350570999 (Click to Chat)
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start gap-4 pt-2 border-t border-gray-100 dark:border-navy-card">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Official Office Address</span>
                <p className="text-xs font-semibold text-gray-800 dark:text-navy-text leading-relaxed mt-0.5">
                  {fullAddress}
                </p>
              </div>
            </div>

            {/* ISO */}
            <div className="pt-4 border-t border-gray-100 dark:border-navy-card space-y-2 text-xs text-gray-600 dark:text-navy-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>ISO 9001:2015 Certified Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Director: Vivek Dange | Est. 2018</span>
              </div>
            </div>
          </div>

          {/* Location Map Box */}
          <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-red" /> Nanded Campus Map
              </span>
              <span className="text-gray-400 text-[10px]">PIN 431605</span>
            </div>
            <div className="aspect-[16/9] w-full rounded-xl bg-gray-100 dark:bg-navy-card border border-gray-200 dark:border-navy-border flex flex-col items-center justify-center p-4 text-center">
              <MapPin className="w-8 h-8 text-brand-red animate-bounce mb-2" />
              <h4 className="text-xs font-bold text-gray-800 dark:text-white">Krupa Sindhu Office & Training Center</h4>
              <p className="text-[11px] text-gray-500 dark:text-navy-muted mt-1 leading-normal max-w-xs">
                {fullAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Right Feedback Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
