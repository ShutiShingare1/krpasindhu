import React, { useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ShieldCheck, Award, Target, Eye, Heart, Calendar, Building2 } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: 'Quality & Process', desc: 'Committed to ISO 9001:2015 quality standards across software engineering and academic coaching.' },
    { title: 'Integrity & Trust', desc: 'Transparent communication, honest timelines, and reliable client & student relationships.' },
    { title: 'Innovation', desc: 'Adopting modern technologies like React, Node.js, Cloud APIs, and AI automation tools.' },
    { title: 'Continuous Learning', desc: 'Empowering students and team members through practical hands-on mentorship.' },
    { title: 'Client Satisfaction', desc: 'Delivering tailored digital advertising and business software that achieves real ROI.' },
    { title: 'Professional Excellence', desc: 'High standards of code maintainability, security, and responsive design.' }
  ];

  const milestones = [
    { year: '2018', title: 'Company Establishment', desc: 'Founded Krupa Sindhu Advertising & Software Pvt. Ltd. under Director Vivek Dange in Maharashtra.' },
    { year: '2020', title: 'Expansion of IT Internship Division', desc: 'Launched structured live-project coaching for BE, BCA, MCA, and Diploma graduates.' },
    { year: '2022', title: 'ISO 9001:2015 Quality Certification', desc: 'Achieved formal ISO 9001:2015 certification for quality management standards.' },
    { year: '2024', title: 'Enterprise Software & Product Suite Launch', desc: 'Introduced custom ERP and CRM solutions alongside digital ad agency operations.' },
    { year: '2026', title: 'AI-Powered Digital Transformation', desc: 'Integrated Gemini AI assistance, expanded student certification gallery, and cloud workflows.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SectionHeading
        badge="About Our Organization"
        title="KrupaSindhu Software & Advertising Pvt. Ltd."
        subtitle="ISO 9001:2015 Certified Software Engineering, Digital Advertising & Technical Mentorship Ecosystem"
      />

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Our Origin & Identity</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Established in 2018 with a Commitment to Quality
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-navy-muted leading-relaxed">
            Established in 2018 under the visionary leadership of Director Vivek Dange, Krupa Sindhu Advertising & Software Pvt. Ltd. has grown into a trusted technology partner and premier IT career development organization.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-navy-muted leading-relaxed">
            We operate across two core verticals: high-performance business technology (custom software, mobile apps, digital marketing campaigns) and industry-aligned IT internships that equip candidates with practical live-project experience.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-brand-green dark:bg-green-950/60 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800">
              <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 Certified Quality Management
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-3xl p-8 shadow-xl text-center space-y-4 max-w-md w-full">
            <img src={logoImg} alt="Krupa Sindhu Logo" className="h-24 w-auto mx-auto object-contain p-2 rounded-2xl border border-gray-100 dark:border-navy-border shadow-sm" />
            <div>
              <h3 className="font-extrabold text-xl text-brand-red">KRUPASINDHU</h3>
              <p className="text-xs text-gray-500 dark:text-navy-muted">Softwares & Advertisement Pvt. Ltd.</p>
            </div>
            <div className="pt-3 border-t border-gray-100 dark:border-navy-card grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="block font-bold text-gray-900 dark:text-white">Incorporated</span>
                <span className="text-gray-500 dark:text-navy-muted">2018</span>
              </div>
              <div>
                <span className="block font-bold text-gray-900 dark:text-white">Director</span>
                <span className="text-gray-500 dark:text-navy-muted">Vivek Dange</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-8 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-brand-red/10 text-brand-red flex items-center justify-center mb-2">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-navy-muted leading-relaxed">
            To empower businesses through robust, process-driven software engineering and digital advertising, while transforming engineering and IT graduates into industry-ready software professionals through live project experience and ISO certified mentorship.
          </p>
        </div>

        <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-8 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-navy-muted leading-relaxed">
            To become Maharashtra’s premier technology hub recognized for engineering excellence, ISO compliant process standards, digital marketing ROI, and an unmatched career development ecosystem for aspiring tech professionals.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Our Foundational Values</h2>
          <p className="text-xs text-gray-500 dark:text-navy-muted mt-1">Guided by quality, integrity, and student success</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-brand-red/10 text-brand-red font-extrabold flex items-center justify-center text-xs mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{v.title}</h3>
              <p className="text-xs text-gray-600 dark:text-navy-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ISO Certification Presentation */}
      <div className="bg-gradient-to-r from-emerald-950 via-green-900 to-navy-bg rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-300 border border-green-400/30">
            Quality Assurance Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">ISO 9001:2015 Certified Operations</h2>
          <p className="text-xs sm:text-sm text-green-100 leading-relaxed max-w-2xl">
            Krupa Sindhu Advertising & Software Pvt. Ltd. adheres strictly to ISO 9001:2015 Quality Management principles. Our software development lifecycle, test case reviews, and student internship evaluation procedures conform to international quality benchmarks.
          </p>
        </div>
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-green-400/40 bg-green-900/60 flex flex-col items-center justify-center text-center p-2 shadow-inner">
            <Award className="w-8 h-8 text-amber-300 mb-1" />
            <span className="text-[10px] font-black tracking-widest uppercase">ISO 9001:2015</span>
            <span className="text-[9px] text-green-200">Certified Standard</span>
          </div>
        </div>
      </div>

      {/* Company Milestones Timeline */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Our Journey & Milestones</h2>
          <p className="text-xs text-gray-500 dark:text-navy-muted mt-1">Growth timeline since 2018</p>
        </div>

        <div className="relative border-l-2 border-brand-red/30 pl-6 ml-4 sm:ml-8 space-y-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-red border-4 border-white dark:border-navy-bg"></span>
              <div className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-xl p-5 shadow-sm">
                <span className="text-xs font-extrabold text-brand-red">{m.year}</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-0.5">{m.title}</h3>
                <p className="text-xs text-gray-600 dark:text-navy-muted mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
