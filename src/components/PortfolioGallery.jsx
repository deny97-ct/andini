// src/components/PortfolioGallery.jsx
import React from 'react';

// Data Gambar Portofolio (Ganti URL dengan foto pernikahan premium Pak Haji)
const portfolioItems = [
  {
    id: 1,
    title: 'Adat Jawa Modern - Sarah & Dimas',
    category: 'Traditional Wedding',
    image: 'https://images.unsplash.com/photo-1610173826021-d6f7a63b063d?q=80&w=600&auto=format&fit=crop', // Foto Pernikahan Adat
  },
  {
    id: 2,
    title: 'Gala Intimate - Clara & Andre',
    category: 'International Wedding',
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=600&auto=format&fit=crop', // Foto Dekorasi Mewah
  },
  {
    id: 3,
    title: 'Ballroom Grand - Bella & Reza',
    category: 'Grand Ballroom Event',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456dfe0ba?q=80&w=600&auto=format&fit=crop', // Foto Gaun & MUA
  },
  {
    id: 4,
    title: 'Outdoor Garden - Anita & Yoga',
    category: 'Outdoor Ceremony',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop', // Foto Kebahagiaan Klien
  },
  {
    id: 5,
    title: 'Engagement Ring Session',
    category: 'Pre-Wedding',
    image: 'https://images.unsplash.com/photo-1510076857177-74c0581a9f1f?q=80&w=600&auto=format&fit=crop', // Foto Cincin/Detail
  },
  {
    id: 6,
    title: 'Premium Catering Display',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop', // Foto Katering
  },
];

const PortfolioGallery = () => {
  return (
    <section id="galeri" className="py-24 px-6 lg:px-24 bg-stone-50">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-serif mb-5 text-stone-900">
          Setiap Momen Punya <span className="italic text-rose-700">Ceritanya</span> Sendiri.
        </h2>
        <p className="text-stone-600 text-lg">
          Intip kebahagiaan para klien premium kami. Dari konsep tradisional hingga internasional, kami pastikan setiap detailnya sempurna dan tak terlupakan.
        </p>
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 ease-in-out">
            <img 
              src={item.image} 
              alt={item.title} 
              className="object-cover w-full h-80 transition duration-500 group-hover:scale-110"
            />
            {/* Overlay Gradient Halus */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            
            {/* Deskripsi Muncul Saat Hover */}
            <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-10 group-hover:translate-y-0 transition duration-300">
              <span className="inline-block bg-rose-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-lg">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-1 leading-tight group-hover:text-rose-100 transition">
                {item.title}
              </h3>
              <p className="text-sm text-stone-200 opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Wujudkan pernikahan elegan Anda bersama EverAfter.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <button className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition shadow-lg">
          Lihat Lebih Banyak Portofolio
        </button>
      </div>
    </section>
  );
};

export default PortfolioGallery;
