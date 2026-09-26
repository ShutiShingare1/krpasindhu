import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, Code, GraduationCap, Layers, CheckCircle2, Sparkles, Building2, Users } from 'lucide-react';
import { api } from '../services/api';
import { ServiceItem, ProductItem, InternshipItem } from '../types';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ProductCard } from '../components/cards/ProductCard';
import { InternshipCard } from '../components/cards/InternshipCard';
import { CertificationGallery } from '../components/gallery/CertificationGallery';
import logoImg from '../assets/logo.jpg';

export const Home: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [internships, setInternships] = useState<InternshipItem[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getServices().then(setServices).catch(() => { });
    api.getProducts().then(setProducts).catch(() => { });
    api.getInternships().then(setInternships).catch(() => { });
  }, []);

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-navy-bg dark:via-navy-surface dark:to-navy-bg pt-12 pb-20 border-b border-gray-100 dark:border-navy-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-green-50 text-brand-green dark:bg-green-950/60 dark:text-green-400 border border-green-200 dark:border-green-800">
                <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 Certified Organization
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
                Building Skills. <br className="hidden sm:inline" />
                Delivering Technology. <br />
                <span className="gradient-text-red">Creating Opportunities.</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 dark:text-navy-muted max-w-2xl leading-relaxed">
                Established in 2018 under Director Vivek Dange, <strong>KRUPASINDHU Software & Advertising Pvt. Ltd.</strong> is a premier software engineering firm, digital advertising agency, and professional IT training ecosystem in Maharashtra.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/internship"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-red hover:bg-brand-redHover shadow-lg shadow-brand-red/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Explore Internships <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-gray-800 dark:text-white bg-white dark:bg-navy-card hover:bg-gray-100 dark:hover:bg-navy-border border border-gray-200 dark:border-navy-border shadow-sm transition-all duration-200"
                >
                  Software & Ad Services
                </Link>
              </div>

              {/* Credibility Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-navy-card text-xs">
                <div>
                  <span className="block font-extrabold text-lg text-gray-900 dark:text-white">Est. 2018</span>
                  <span className="text-gray-500 dark:text-navy-muted">Established Experience</span>
                </div>
                <div>
                  <span className="block font-extrabold text-lg text-brand-green">ISO Certified</span>
                  <span className="text-gray-500 dark:text-navy-muted">Quality Standard</span>
                </div>
                <div>
                  <span className="block font-extrabold text-lg text-brand-gold">100% Live</span>
                  <span className="text-gray-500 dark:text-navy-muted">Project Mentorship</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-3xl p-8 shadow-2xl space-y-6">
                <div className="flex items-center space-x-4 border-b border-gray-100 dark:border-navy-card pb-6">
                  <img src={logoImg} alt="Krupa Sindhu Logo" className="h-16 w-auto object-contain rounded-xl border border-gray-200 dark:border-navy-border p-1 bg-white" />
                  <div>
                    <h3 className="font-extrabold text-lg text-brand-red">KRUPASINDHU</h3>
                    <p className="text-xs text-gray-500 dark:text-navy-muted"> Software & Advertising Pvt. Ltd.</p>
                    <span className="inline-block mt-1 text-[10px] font-bold text-brand-green bg-green-50 dark:bg-green-950/60 px-2 py-0.5 rounded border border-green-200 dark:border-green-800">
                      ISO 9001:2015 Verified
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-navy-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Custom Web & Mobile Application Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-navy-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Software Testing & Quality Assurance Automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-navy-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Targeted Digital Advertising & Brand Strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-navy-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>ISO Certified Career & Internship Credentials</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-center block text-white bg-gradient-to-r from-brand-red to-rose-700 hover:shadow-lg transition-all"
                  >
                    Contact Corporate Office
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-6 shadow-sm grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="space-y-1">
            <Building2 className="w-6 h-6 text-brand-red mx-auto" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Est. 2018</h4>
            <p className="text-xs text-gray-500 dark:text-navy-muted">Registered Technology Organization</p>
          </div>
          <div className="space-y-1">
            <ShieldCheck className="w-6 h-6 text-brand-green mx-auto" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">ISO 9001:2015</h4>
            <p className="text-xs text-gray-500 dark:text-navy-muted">Quality Management Certified</p>
          </div>
          <div className="space-y-1">
            <Users className="w-6 h-6 text-brand-gold mx-auto" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Vivek Dange</h4>
            <p className="text-xs text-gray-500 dark:text-navy-muted">Executive Directorate</p>
          </div>
          <div className="space-y-1">
            <Users className="w-6 h-6 text-brand-red mx-auto" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Shruti Shingare</h4>
            <p className="text-xs text-gray-500 dark:text-navy-muted">HR</p>
          </div>
          <div className="space-y-1">
            <GraduationCap className="w-6 h-6 text-blue-500 mx-auto" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Live Internships</h4>
            <p className="text-xs text-gray-500 dark:text-navy-muted">Hands-on Software Development</p>
          </div>
        </div>
      </section>

      {/* Company About Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-red-900 via-rose-950 to-navy-bg rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20">
              Company Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Engineering Software Excellence & Empowering Tech Talent
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl">
              Krupa Sindhu  Advertising &  Pvt. Ltd. bridges the gap between modern business technology requirements and candidate skill development. From custom enterprise web applications and QA automation to performance digital marketing and structured IT internships, we deliver verified quality at every step.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-gray-900 bg-white hover:bg-gray-100 shadow-md transition-colors"
            >
              Read Complete Story <ArrowRight className="w-4 h-4 text-brand-red" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Services</h2>
          </div>
          <Link to="/services" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
            View All Services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>

      {/* Featured Internship Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-navy-surface/30 rounded-3xl border border-gray-100 dark:border-navy-card p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-brand-red dark:bg-brand-red/10 dark:text-red-400 border border-red-100 dark:border-brand-red/20 mb-2 inline-block">
            Career Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Industry-Oriented IT Internships
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-navy-muted">
            Gain live client project experience, senior developer mentorship, and ISO 9001:2015 certified completion credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.slice(0, 3).map((internship) => (
            <InternshipCard key={internship._id} internship={internship} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/internship"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-brand-red hover:bg-brand-redHover shadow-md transition-colors"
          >
            Explore Complete Internship Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Products Preview */}
      {products.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Enterprise Solutions</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Software Products</h2>
            </div>
            <Link to="/products" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
              Browse Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Director Highlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <img
              src="/assets/director_vivek.jpg"
              alt="Vivek Dange, Director of Krupa Sindhu Advertising & Software Pvt. Ltd."
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-xl border-4 border-white dark:border-navy-card"
            />
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800 inline-block">
              Executive Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Director Vivek Dange
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-navy-muted leading-relaxed">
              "At Krupa Sindhu Advertising & Software Pvt. Ltd., our mission is twofold: delivering process-driven, robust technology solutions for modern enterprises while nurturing the next generation of software engineers through practical, live-project internships."
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-gray-500 dark:text-navy-muted">
              <span>• Established in 2018</span>
              <span>• ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CertificationGallery />
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-brand-red to-rose-800 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Let’s Build Your Next Opportunity.
          </h2>
          <p className="text-xs sm:text-sm text-red-100 max-w-xl mx-auto leading-relaxed">
            Whether you are looking for custom software engineering, digital advertising, or an ISO certified IT internship, Krupa Sindhu is ready to partner with you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl font-bold text-xs text-brand-red bg-white hover:bg-gray-100 shadow-md transition-colors"
            >
              Get in Touch Now
            </Link>
            <Link
              to="/internship"
              className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-black/20 hover:bg-black/30 border border-white/30 transition-colors"
            >
              Apply for Internships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
