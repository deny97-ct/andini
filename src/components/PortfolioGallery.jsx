import React from 'react';

const PortfolioGallery = () => {
  const portfolios = [
    { id: 1, title: 'Akad Nikah Tradisional', category: 'Adat Nusantara', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80', span: 'col-span-12 md:col-span-8 row-span-2' },
    { id: 2, title: 'Resepsi Modern', category: 'Gedung / Indoor', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80', span: 'col-span-12 md:col-span-4' },
    { id: 3, title: 'Intimate Garden Wedding', category: 'Outdoor', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80', span: 'col-span-12 md:col-span-4' },
    { id: 4, title: 'Detail Dekorasi Pelaminan', category: 'Dekorasi', img: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80', span: 'col-span-12 md:col-span-8' },
  ];

  return (
    <section id="galeri" className="py-20 px-6 lg:px-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-stone-800">Galeri Momen Bahagia</h2>
        <p className="text-stone-500 max-w-2xl mx-auto">Setiap pernikahan punya ceritanya sendiri. Jelajahi portofolio kami untuk menemukan inspirasi hari bahagiamu.</p>
      </div>
      <div className="grid grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
        {portfolios.map((item) => (
          <div key={item.id} className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.span}`}>
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-rose-300 text-sm font-bold mb-2 tracking-widest uppercase">{item.category}</span>
              <h3 className="text-white text-2xl font-serif">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGallery;
