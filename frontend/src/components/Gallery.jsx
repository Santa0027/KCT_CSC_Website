import React from 'react';

const galleryImages = [
  './pic1.jpeg',
  './pic2.jpeg',
  './pic3.jpeg',
  './pic4.jpeg',
  './pic5.jpeg',
  './pic6.jpeg',
  './pic7.jpeg',
  './pic8.jpeg'
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;