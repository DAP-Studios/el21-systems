import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      company: 'Gujarat Plastics Ltd.',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'El 21 Systems transformed our plastic molding operations. Their temperature controllers improved our product quality by 40% and reduced energy costs significantly. Outstanding support team!',
      industry: 'Plastic Manufacturing'
    },
    {
      name: 'Dr. Priya Sharma',
      company: 'Pharma Solutions Inc.',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Precision is everything in pharmaceutical manufacturing. El 21\'s temperature control systems ensure our processes meet strict FDA compliance with ±0.1°C accuracy.',
      industry: 'Pharmaceutical'
    },
    {
      name: 'Amit Singh',
      company: 'Steel Works India',
      location: 'Pune, Maharashtra',
      rating: 5,
      text: 'Been using El 21 controllers for 3 years across our steel processing units. Reliability is exceptional - 99.9% uptime even in our harsh industrial environment.',
      industry: 'Steel Processing'
    },
    {
      name: 'Kavitha Reddy',
      company: 'Food Tech Industries',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: 'Their food-grade temperature controllers helped us achieve HACCP certification. The technical support team is incredibly knowledgeable and responsive.',
      industry: 'Food Processing'
    },
    {
      name: 'Vikram Joshi',
      company: 'Chemical Dynamics',
      location: 'Vadodara, Gujarat',
      rating: 5,
      text: 'Custom solutions for our complex chemical processes. El 21 understood our requirements and delivered beyond expectations. Highly recommended!',
      industry: 'Chemical Processing'
    },
    {
      name: 'Sunita Mehta',
      company: 'Textile Mills Group',
      location: 'Surat, Gujarat',
      rating: 5,
      text: 'Local support with global quality standards. Their programmable controllers optimized our dyeing processes, reducing waste by 25%.',
      industry: 'Textile Manufacturing'
    }
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#021526] to-[#041e3a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#0077ff] to-[#ff385c] text-white border-0">Customer Success Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            What Our <span className="holographic">Customers Say</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            From small-scale operations to large industrial plants, our temperature control
            solutions have helped businesses achieve operational excellence and growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#f7d000] mb-2">{stat.value}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card-2026 hover-3d border-white/10 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-[#0077ff]/40" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f7d000] text-[#f7d000]" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm font-medium text-white/80">{testimonial.company}</p>
                      <p className="text-xs text-white/60">{testimonial.location}</p>
                    </div>
                    <Badge className="text-xs bg-gradient-to-r from-[#0077ff] to-[#ff385c] text-white border-0">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass-card-2026 rounded-2xl p-8 border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Join 500+ Satisfied Customers
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Experience the difference that quality temperature control solutions can make
            to your operations. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#0077ff] to-[#0055cc] hover:from-[#0055cc] hover:to-[#0077ff] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-[#0077ff] text-[#0077ff] hover:bg-[#0077ff] hover:text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;