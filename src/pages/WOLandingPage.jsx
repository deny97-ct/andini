// src/pages/WOLandingPage.jsx
import React from 'react';
import { Calendar, Heart, Star, Phone, CheckCircle } from 'lucide-react';

// Penambahan ekstensi .jsx untuk memastikan Vercel dapat me-resolve module
import PortfolioGallery from '../components/PortfolioGallery.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';

const WOLandingPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans overflow-x-hidden">
      
      {/* Navbar Minimalis */}
      <nav className="flex justify-between items-center p-6 lg:px-24 bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="text-2xl font-serif font-bold text-rose-700">EverAfter WO.</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#layanan" className="hover:text-rose-600 transition">Layanan</a>
          <a href="#galeri" className="hover:text-rose-600 transition">Galeri</a>
          <a href="#testimoni" className="hover:text-rose-600 transition">Testimoni</a>
        </div>
        <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm hover:bg-rose-700 transition">
          Hubungi Kami
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-serif leading-tight">
            Wujudkan Pernikahan <span className="italic text-rose-700">Impianmu</span> Tanpa Stres.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Dari perencanaan konsep hingga eksekusi di hari-H, tim profesional kami memastikan setiap momen spesial Anda berjalan sempurna, elegan, dan tak terlupakan.
          </p>
          <button className="flex items-center space-x-2 bg-rose-700 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-900 transition shadow-lg mt-4">
            <Calendar size={20} />
            <span>Cek Jadwal Kosong</span>
          </button>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full h-[500px] rounded-t-full rounded-b-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
              alt="Pernikahan Elegan" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Keunggulan / Value Proposition */}
      <section id="layanan" className="py-20 px-6 lg:px-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-stone-500">Kami menangani detailnya, Anda nikmati momennya.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Heart className="text-rose-600" size={32} />, title: 'Konsep Personal', desc: 'Desain dan tema pernikahan yang disesuaikan 100% dengan karakter Anda berdua.' },
            { icon: <CheckCircle className="text-rose-600" size={32} />, title: 'Vendor Terkurasi', desc: 'Bekerja sama dengan MUA, katering, dan dekorator terbaik di kelasnya.' },
            { icon: <Star className="text-rose-600" size={32} />, title: 'Manajemen Rapi', desc: 'Sistem pembayaran transparan dan timeline acara yang dieksekusi dengan presisi.' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-xl transition duration-300 group">
              <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Panggil Komponen Galeri */}
      <PortfolioGallery />

      {/* Panggil Komponen Testimoni */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-24 bg-stone-900 text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-serif mb-6">Siap Merencanakan Hari Bahagia Anda?</h2>
        <p className="text-stone-400 mb-10 max-w-2xl mx-auto text-lg">
          Jangan biarkan stres mengganggu persiapan pernikahan Anda. Konsultasikan visi Anda dengan tim planner kami secara gratis.
        </p>
        <button className="inline-flex items-center space-x-2 bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-500 transition shadow-[0_0_20px_rgba(225,29,72,0.4)] mx-auto">
          <Phone size={24} />
          <span>Konsultasi via WhatsApp</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-stone-500 text-sm border-t border-stone-200">
        <p>&copy; 2026 EverAfter Wedding Organizer. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default WOLandingPage;
