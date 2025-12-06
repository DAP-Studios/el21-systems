import React from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Zap, CheckCircle, Globe, Clock, Shield, Factory, TrendingUp, Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const achievements = [
    {
      icon: Award,
      value: '15+',
      label: 'Years Excellence',
      description: 'Proven track record in industrial automation'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Satisfied Clients',
      description: 'Trusted by leading industries across India'
    },
    {
      icon: Globe,
      value: 'Pan-India',
      label: 'Delivery Network',
      description: 'Nationwide reach with local support'
    },
    {
      icon: Shield,
      value: 'ISO 9001',
      label: 'Certified Quality',
      description: 'International quality management standards'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision Excellence',
      description: 'We deliver temperature control solutions with industry-leading accuracy and reliability.'
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'Continuous R&D investment to bring cutting-edge technology to our customers.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated support team ensuring 94% response rate and complete satisfaction.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified manufacturing processes with rigorous quality control standards.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started as a small workshop in Surat, Gujarat with a vision to serve Indian industries.'
    },
    {
      year: '2012',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2008 certification for quality management systems.'
    },
    {
      year: '2015',
      title: 'Pan-India Expansion',
      description: 'Expanded delivery network to serve customers across all major Indian cities.'
    },
    {
      year: '2018',
      title: 'R&D Center',
      description: 'Established dedicated research and development facility for product innovation.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platform and digital customer support systems.'
    },
    {
      year: '2024',
      title: '500+ Customers',
      description: 'Reached milestone of serving over 500 satisfied customers across India.'
    }
  ];

  return (
    <Layout showContactSection={false}>
      <div>
      {/* Hero Section - 2026 Style */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#021526] via-[#0077ff]/20 to-[#021526] overflow-hidden">
        <div className="circuit-overlay absolute inset-0 opacity-20" />
        <div className="particle-background absolute inset-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 glass-card-2026 px-6 py-3 rounded-full">
              <span className="text-[#f7d000] font-bold text-lg">About El 21 Systems</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Building India's <span className="holographic">Industrial Future</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              For over 15 years, El 21 Systems has been at the forefront of industrial temperature
              control technology, serving industries across India with precision, reliability, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-b from-[#021526] to-[#041e3a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Our Journey</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  El 21 Systems was founded with a vision to provide reliable, cost-effective
                  temperature control solutions to India's growing industrial sector. Starting
                  from a small workshop in Surat, we have grown into a trusted name in industrial
                  automation across the country.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Today, we serve over 500 satisfied customers across various industries,
                  from plastic manufacturing to pharmaceutical processing, maintaining our
                  commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-dark rounded-lg p-4 border border-white/10">
                  <Factory className="h-6 w-6 text-[#0077ff] mb-2" />
                  <h4 className="font-semibold text-white mb-2">Manufacturing Hub</h4>
                  <p className="text-sm text-white/70">
                    State-of-the-art facility in Surat's industrial corridor
                  </p>
                </div>
                <div className="glass-dark rounded-lg p-4 border border-white/10">
                  <TrendingUp className="h-6 w-6 text-[#00ff88] mb-2" />
                  <h4 className="font-semibold text-white mb-2">Growth Track</h4>
                  <p className="text-sm text-white/70">
                    Consistent 25% year-over-year growth since 2015
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card-2026 text-center hover-3d border-white/10">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="glass-dark p-3 rounded-lg">
                          <achievement.icon className="h-6 w-6 text-[#0077ff]" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-[#f7d000] mb-2">
                        {achievement.value}
                      </div>
                      <div className="font-semibold mb-2 text-white">
                        {achievement.label}
                      </div>
                      <p className="text-xs text-white/60">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#041e3a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="glass-card-2026 hover-3d border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="glass-dark p-3 rounded-xl">
                    <Target className="h-8 w-8 text-[#0077ff]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  To empower India's industrial growth by providing world-class temperature
                  control solutions that enhance productivity, ensure quality, and drive
                  operational excellence across all manufacturing sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card-2026 hover-3d border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="glass-dark p-3 rounded-xl">
                    <Zap className="h-8 w-8 text-[#ff385c]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  To be India's most trusted partner for industrial automation solutions,
                  recognized for innovation, quality, and customer-centric approach in
                  the temperature control and process automation industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-b from-[#041e3a] to-[#021526]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Growth <span className="holographic">Journey</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Key milestones that shaped El 21 Systems into the trusted industrial partner we are today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="glass-card-2026 w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm text-[#f7d000] group-hover:scale-110 transition-all">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-white/20 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                    <p className="text-white/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#021526]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose <span className="holographic">El 21 Systems?</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our core values drive everything we do, ensuring that every customer
              receives the highest quality products and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card-2026 group hover-3d border-white/10 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="glass-dark p-3 rounded-lg group-hover:scale-110 transition-all">
                        <value.icon className="h-6 w-6 text-[#0077ff]" />
                      </div>
                    </div>
                    <h4 className="font-bold mb-3 text-white">{value.title}</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-[#021526] to-[#041e3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Certifications & <span className="holographic">Standards</span></h2>
            <p className="text-white/70">
              We maintain the highest industry standards and certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'ISO 9001:2015',
                description: 'Quality Management System',
                icon: Award
              },
              {
                title: 'TrustSEAL Verified',
                description: 'IndiaMART Verified Supplier',
                icon: Shield
              },
              {
                title: 'CE Compliance',
                description: 'European Conformity Standards',
                icon: CheckCircle
              }
            ].map((cert, index) => (
              <Card key={index} className="glass-card-2026 hover-3d border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="glass-dark p-3 rounded-lg">
                      <cert.icon className="h-8 w-8 text-[#00ff88]" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-white">{cert.title}</h4>
                  <p className="text-sm text-white/70">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Owner/Leadership Section */}
      <section className="py-20 bg-[#021526]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Meet Our <span className="holographic">Founder</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Visionary leader driving innovation and excellence in industrial temperature control
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="glass-card-2026 hover-3d border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Photo Section */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-[#0077ff] to-[#ff385c] p-8 flex items-center justify-center">
                    <div className="text-center">
                      {/* Placeholder for photo - replace with actual image */}
                      <div className="w-62 h-62 mx-auto bg-white/10 rounded-full flex items-center justify-center text-6xl font-bold text-white mb-6 border-4 border-white/20">
                        <img
                          src="/assets/image/sailesh.jpg"
                          alt="Sailesh Rathod"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-3 rounded-lg">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">Sailesh Rathod</h3>
                      <Badge className="bg-white/20 text-white border-0 mb-4">
                        Founder & CEO
                      </Badge>
                      
                      {/* Contact Info */}
                      <div className="space-y-3 mt-6">
                        <div className="flex items-center justify-center gap-2 text-white/90">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">sailesh@el21systems.com</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white/90">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">+91 98765 43210</span>
                        </div>
                        {/* <div className="flex items-center justify-center gap-2 text-white/90">
                          <Linkedin className="h-4 w-4" />
                          <span className="text-sm">linkedin.com/in/saileshrathod</span>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <h4 className="text-2xl font-bold mb-6 text-white">About Me</h4>

                    <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                      <p>
                        With over 20 years of experience in industrial automation and temperature control systems,
                        I founded El 21 Systems in 2009 with a vision to provide world-class automation solutions
                        to Indian industries at affordable prices.
                      </p>
                      <p>
                        My journey began as an electrical engineer working with multinational corporations, where
                        I witnessed the gap between international technology standards and what was available to
                        Indian manufacturers. This inspired me to start El 21 Systems, bridging that gap by offering
                        precision instruments and reliable automation equipment.
                      </p>
                      <p>
                        Today, I'm proud to lead a team that serves over 500 satisfied customers across India,
                        maintaining our commitment to quality, innovation, and customer satisfaction. Our focus
                        remains on understanding each client's unique needs and delivering tailored solutions that
                        enhance their productivity and competitiveness.
                      </p>
                      <p>
                        I believe in continuous learning and staying ahead of technological advancements. My goal
                        is to make El 21 Systems synonymous with reliability and excellence in the industrial
                        automation sector.
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-dark rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Experience</div>
                        <div className="text-white/70 text-sm">20+ Years in Automation</div>
                      </div>
                      <div className="glass-dark rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Education</div>
                        <div className="text-white/70 text-sm">B.E. Electrical Engineering</div>
                      </div>
                      <div className="glass-dark rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Specialization</div>
                        <div className="text-white/70 text-sm">Temperature Control Systems</div>
                      </div>
                      <div className="glass-dark rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Company Founded</div>
                        <div className="text-white/70 text-sm">2009 - Surat, Gujarat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote Section */}
            <div className="text-center mt-12">
              <Card className="glass-card-2026 hover-3d border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    "Our mission is to empower Indian manufacturing with precision temperature control solutions that drive productivity, quality, and innovation in every industry we serve."
                  </h3>
                  <p className="text-white/70">- Sailesh Rathod, Founder & CEO</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default AboutUs;