import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const testimonials = [
    { id: 1, name: 'Rina & Dimas', event: 'Resepsi Gedung, Majalengka', text: 'Tim WO benar-benar luar biasa! Dari awal persiapan sampai hari H, semuanya diurus dengan sangat profesional.', rating: 5 },
    { id: 2, name: 'Sarah & Kevin', event: 'Intimate Wedding, Cirebon', text: 'Sangat bersyukur menemukan tim ini. Mereka sangat mendengarkan apa yang kami inginkan untuk konsep pernikahan kami.', rating: 5 },
    { id: 3, name: 'Ayu & Budi', event: 'Akad Tradisional, Kuningan', text: 'Tim yang solid dan sangat responsif. Setiap kali kami panik soal vendor, mereka selalu punya solusi.', rating: 5 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);

  return (
    <section id="testimoni" className="py-24 px-6 lg:px-24 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-stone-800">Apa Kata Mereka?</h2>
          <p className="text-stone-500">Cerita bahagia dari klien yang telah mempercayakan momen spesialnya kepada kami.</p>
        </div>
        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
          <Quote className="text-rose-100 w-16 h-16 absolute top-8 left-8 -z-0" />
          <div className="relative z-10 text-center">
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-rose-500 text-rose-500" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-stone-600 italic leading-relaxed mb-8">"{testimonials[currentIndex].text}"</p>
            <div>
              <h4 className="text-lg font-bold text-stone-800">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-rose-600 font-medium">{testimonials[currentIndex].event}</p>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-6">
            <button onClick={prevSlide} className="p-2 bg-white rounded-full shadow-md text-stone-400 hover:text-rose-600 hover:scale-110 transition"><ChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="p-2 bg-white rounded-full shadow-md text-stone-400 hover:text-rose-600 hover:scale-110 transition"><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
