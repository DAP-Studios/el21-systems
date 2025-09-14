import React from 'react';

interface ImageScrollerProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  height?: string;
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images, height = "h-64" }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 border border-accent-purple/20">
      <div className="flex animate-scroll-x space-x-6 py-6">
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 ${height} w-80 group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                {image.title && (
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-sm text-white/90">{image.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;