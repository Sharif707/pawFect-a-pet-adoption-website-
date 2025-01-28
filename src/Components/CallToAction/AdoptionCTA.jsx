import React, { useState } from 'react';
import { Heart, PawPrint, Home, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import kitten from "../../assets/kitten.avif"
import dogfun from "../../assets/dog-fun.jpg"
import familyPet from "../../assets/familypet.avif"
import smiley1 from "../../assets/smiley.jpg"
import smiley2 from "../../assets/smiley2.jpg"
import smiley3 from "../../assets/smiley-3.jpg"
import petParentHood from "../../assets/pet-parenthood.webp"
import { Link } from 'react-router-dom';

const AdoptionCTA = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Adopting Luna was the best decision we ever made. She's brought so much joy and laughter into our home.",
      author: "Sarah & Mike Johnson",
      image: smiley1,
      rating: 5
    },
    {
      text: "Our senior dog Max has shown us that love knows no age. He's completely transformed our lives.",
      author: "David Chen",
      image: smiley2,
      rating: 5
    },
    {
      text: "The adoption process was smooth, and now we have the most amazing companion we could ask for.",
      author: "Emily Martinez",
      image: smiley3,
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-teal-50 to-purple-50 py-16 overflow-hidden">
     
      <div className="absolute inset-0 opacity-10">
        <PawPrint className="absolute top-10 left-10 w-16 h-16 text-teal-500 transform -rotate-12" />
        <PawPrint className="absolute bottom-10 right-10 w-20 h-20 text-purple-500 transform rotate-12" />
        <Heart className="absolute top-1/4 right-1/4 w-12 h-12 text-pink-500 transform rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
  
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
   
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" /> Make a Difference Today
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Give a Pet a Forever Home,<br />
              <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                Change Two Lives Forever
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Every pet deserves a loving home. When you adopt, you're not just giving an animal a second chance – you're opening your heart to unconditional love and joy that will transform both your lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={'/all-pets'} className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Find Your New Friend
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold rounded-lg transition duration-300">
                Learn About Adoption
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">8.3M+</div>
                <div className="text-gray-600">Pets Adopted</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">2,500+</div>
                <div className="text-gray-600">Shelter Partners</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-600">Love Given</div>
              </div>
            </div>
          </div>

     
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={dogfun}
                  alt="Happy adopted dog with owner"
                  className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-end">
                  <p className="text-white p-4 text-sm">Meet Max, adopted after 2 years in shelter</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src={kitten}
                  alt="Playful kitten"
                  className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-end">
                  <p className="text-white p-4 text-sm">Luna found her forever home</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative group">
                <img
                  src={familyPet}
                  alt="Family with adopted pet"
                  className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-end">
                  <p className="text-white p-4 text-sm">The Williams family adoption story</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src={petParentHood}
                  alt="Senior dog finding forever home"
                  className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-end">
                  <p className="text-white p-4 text-sm">Senior pets deserve love too</p>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="bg-white rounded-2xl shadow-xl p-8 relative">
          <Quote className="absolute top-4 left-4 w-8 h-8 text-teal-200" />
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Success Stories
            </h3>
            
            <div className="relative">
              <div className="flex items-center">
                <button 
                  onClick={prevTestimonial}
                  className="absolute left-0 transform -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                
                <div className="text-center px-16">
                  <p className="text-lg text-gray-700 italic mb-6">
                    {testimonials[activeTestimonial].text}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {testimonials[activeTestimonial].author}
                      </div>
                      <div className="text-sm text-gray-500">Happy Pet Parent</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="absolute right-0 transform translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-teal-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionCTA;