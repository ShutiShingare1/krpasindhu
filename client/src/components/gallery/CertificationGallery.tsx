import React, { useState } from 'react';
import { Award, ZoomIn, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Lightbox } from '../common/Lightbox';

import cert1Img from '../../assets/cert1.jpg';
import cert2Img from '../../assets/cert2.jpg';
import cert3Img from '../../assets/cert3.jpg';
import cert4Img from '../../assets/cert4.jpg';

export const CertificationGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      url: cert1Img,
      title: 'Certificate Distribution — Empowering Learners',
      subtitle: 'Krupasindhu Softwares & Advertisement Pvt. Ltd. Certificate Distribution event — "A Certificate is a Step towards a Brighter Tomorrow."',
      date: 'Certificate Distribution',
      location: 'Gramin Technical Management Campus, Vishnupuri Nanded'
    },
    {
      url: cert2Img,
      title: 'Certificate Distribution — Recognizing Efforts',
      subtitle: 'Student Certificate Distribution ceremony — "Skill Today, Better Tomorrow." Recognizing Efforts | Celebrating Success.',
      date: 'Certificate Distribution',
      location: 'Gramin Technical Management Campus, Vishnupuri Nanded'
    },
    {
      url: cert3Img,
      title: 'Internship Certificate Distribution Ceremony',
      subtitle: 'Krupasindhu Coaching & IT Internship Programme — Recognizing Efforts | Celebrating Success at the student certificate distribution event.',
      date: 'Certificate Distribution',
      location: 'Gramin Technical Management Campus, Vishnupuri Nanded'
    },
    {
      url: cert4Img,
      title: 'Batch Achievement Celebration — Bright Minds, Bright Futures',
      subtitle: 'Group certificate distribution ceremony — "Batch of Achievers: Learn Today, Lead Tomorrow" and "Bright Minds | Bright Futures." Expert Faculty, Hands-on Training, Live Industry Projects.',
      date: 'Certificate Distribution',
      location: 'Krupasindhu Computer Coaching & IT Internship Centre'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-navy-surface/50 border-t border-gray-200 dark:border-navy-card rounded-3xl p-6 sm:p-10 my-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-green-50 text-brand-green dark:bg-green-950/60 dark:text-green-400 border border-green-200 dark:border-green-800 mb-3">
          <Award className="w-4 h-4" /> ISO 9001:2015 Certified Verification
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
          Student Certification Distribution Gallery
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-navy-muted leading-relaxed">
          Celebrating the success of our student interns upon completing live client projects, technical coaching, and quality assurance programs.
        </p>
      </div>

      {/* Grid gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative bg-white dark:bg-navy-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-navy-accent/10 border border-gray-200 dark:border-navy-card cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-navy-card relative">
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-brand-red text-white shadow-lg flex items-center gap-1 text-xs font-bold transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-4 h-4" /> Expand Photo
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-navy-muted line-clamp-2 mt-1">
                {item.subtitle}
              </p>
              <div className="mt-3 pt-2 border-t border-gray-100 dark:border-navy-card flex items-center justify-between text-[10px] text-gray-400">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-brand-red" /> {item.date}</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-brand-green" /> Certified</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={galleryItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
};
