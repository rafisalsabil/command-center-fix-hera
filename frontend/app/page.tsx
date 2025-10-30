'use client';

import { useState } from 'react';
import {
  Zap,
  Battery,
  Brain,
  Leaf,
  ChevronDown,
  Menu,
  X,
  Star,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('sport');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#0052cc] rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#0052cc] bg-clip-text text-transparent">
                AutoDrive
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['Features', 'Models', 'Specs', 'Technology'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0066FF] hover:bg-gray-50 rounded-lg transition-all"
                >
                  {item}
                </a>
              ))}
              <button className="ml-4 bg-[#0066FF] hover:bg-[#0052cc] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md">
                Test Drive
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-4 space-y-2">
              {['Features', 'Models', 'Specs', 'Technology'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0066FF] hover:bg-gray-50 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-[#0066FF] hover:bg-[#0052cc] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all">
                Test Drive
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1920')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium animate-fade-in">
            100% Electric • 0% Emissions
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
            Experience the<br />
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00FF88] bg-clip-text text-transparent">
              Future of Driving
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Premium electric vehicles that combine breathtaking performance with sustainable technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button className="group bg-[#0066FF] hover:bg-[#0052cc] text-white px-10 py-5 rounded-full text-lg font-semibold transition-all shadow-2xl shadow-[#0066FF]/50 hover:shadow-[#0066FF]/70 hover:scale-105 flex items-center gap-2">
              Configure Your Vehicle
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all flex items-center gap-2">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { value: '600km', label: 'Max Range' },
              { value: '3.2s', label: '0-100 km/h' },
              { value: '50k+', label: 'Delivered' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <a href="#features" className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold">
              Why AutoDrive
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0a0a0a]">
              Engineered for Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every AutoDrive is designed to deliver uncompromising performance, comfort, and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Instant torque delivers 0-100 km/h in just 3.2 seconds',
                color: '#0066FF',
                bg: 'from-blue-50 to-blue-100/50'
              },
              {
                icon: Battery,
                title: 'Extended Range',
                description: 'Travel up to 600km on a single charge with advanced battery technology',
                color: '#00FF88',
                bg: 'from-green-50 to-green-100/50'
              },
              {
                icon: Brain,
                title: 'Smart AI',
                description: 'AI-powered assistance keeps you safe and in control at all times',
                color: '#0066FF',
                bg: 'from-purple-50 to-purple-100/50'
              },
              {
                icon: Leaf,
                title: '100% Sustainable',
                description: 'Zero emissions and 100% renewable energy compatible',
                color: '#00FF88',
                bg: 'from-emerald-50 to-emerald-100/50'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.bg} p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Showcase Section */}
      <section id="models" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold">
              Our Lineup
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0a0a0a]">
              Choose Your AutoDrive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct models designed for different lifestyles and driving needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'sport',
                name: 'Sport',
                tagline: 'Performance Unleashed',
                price: '79,990',
                range: '550',
                acceleration: '3.2',
                seating: '4',
                image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
                popular: true
              },
              {
                id: 'luxury',
                name: 'Luxury',
                tagline: 'Premium Comfort',
                price: '94,990',
                range: '600',
                acceleration: '4.1',
                seating: '5',
                image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
                popular: false
              },
              {
                id: 'urban',
                name: 'Urban',
                tagline: 'City-Friendly',
                price: '54,990',
                range: '450',
                acceleration: '5.8',
                seating: '5',
                image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800',
                popular: false
              }
            ].map((vehicle) => (
              <div
                key={vehicle.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${vehicle.popular ? 'ring-2 ring-[#0066FF] scale-105' : ''}`}
              >
                {vehicle.popular && (
                  <div className="absolute top-6 right-6 z-10 bg-[#0066FF] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  ></div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0a0a0a] mb-1">AutoDrive {vehicle.name}</h3>
                      <p className="text-gray-500">{vehicle.tagline}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-sm text-gray-500">Starting at</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[#0066FF]">${vehicle.price}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 pb-8 border-b border-gray-100">
                    {[
                      { label: 'Range', value: `${vehicle.range} km` },
                      { label: '0-100 km/h', value: `${vehicle.acceleration}s` },
                      { label: 'Seating', value: `${vehicle.seating} adults` }
                    ].map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-semibold text-[#0a0a0a]">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className="group/btn w-full bg-[#0066FF] hover:bg-[#0052cc] text-white py-4 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                    Configure Now
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold">
              Technical Details
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0a0a0a]">
              Full Specifications
            </h2>
          </div>

          {/* Model Tabs */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {[
              { id: 'sport', name: 'Sport' },
              { id: 'luxury', name: 'Luxury' },
              { id: 'urban', name: 'Urban' }
            ].map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`px-8 py-3.5 rounded-xl font-semibold transition-all ${
                  selectedModel === model.id
                    ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {model.name}
              </button>
            ))}
          </div>

          {/* Specifications Display */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
              {[
                { label: 'Battery', sport: '85 kWh', luxury: '100 kWh', urban: '60 kWh', icon: Battery },
                { label: 'Range', sport: '550 km', luxury: '600 km', urban: '450 km', icon: Zap },
                { label: 'Top Speed', sport: '250 km/h', luxury: '210 km/h', urban: '180 km/h', icon: Zap },
                { label: '0-100 km/h', sport: '3.2s', luxury: '4.1s', urban: '5.8s', icon: Zap },
                { label: 'Fast Charge', sport: '25 min', luxury: '30 min', urban: '20 min', icon: Battery },
                { label: 'Seating', sport: '4 adults', luxury: '5 adults', urban: '5 adults', icon: Brain },
                { label: 'Cargo', sport: '425 L', luxury: '580 L', urban: '385 L', icon: Check },
                { label: 'Warranty', sport: '8 yrs', luxury: '8 yrs', urban: '8 yrs', icon: Check }
              ].map((spec, index) => (
                <div key={index} className="bg-white p-6 text-center">
                  <spec.icon size={24} className="mx-auto mb-3 text-[#0066FF]" />
                  <div className="text-sm text-gray-500 mb-2">{spec.label}</div>
                  <div className="text-2xl font-bold text-[#0a0a0a]">
                    {selectedModel === 'sport' && spec.sport}
                    {selectedModel === 'luxury' && spec.luxury}
                    {selectedModel === 'urban' && spec.urban}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold">
              Innovation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced features that make every drive safer, smarter, and more enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Autopilot & Safety',
                description: '360° camera coverage, automatic emergency braking, lane keeping assist, and adaptive cruise control powered by advanced AI.',
                features: ['Auto Emergency Braking', '360° Cameras', 'Lane Assist', 'Adaptive Cruise'],
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
              },
              {
                title: 'Premium Infotainment',
                description: '17-inch touchscreen with intuitive interface, premium sound system, and seamless smartphone integration.',
                features: ['17" Touchscreen', 'Premium Audio', 'Voice Control', 'Navigation'],
                image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800'
              },
              {
                title: 'Over-the-Air Updates',
                description: 'Your vehicle gets better over time with wireless updates adding new features and improvements.',
                features: ['Wireless Updates', 'New Features', 'Bug Fixes', 'Performance'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
              },
              {
                title: 'Mobile App Control',
                description: 'Control your vehicle remotely. Pre-condition climate, check charging, and track location.',
                features: ['Remote Climate', 'Charge Status', 'Door Lock', 'GPS Tracking'],
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800'
              }
            ].map((tech, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tech.image})` }}
                ></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{tech.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-[#00FF88] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold">
              Reviews
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0a0a0a]">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join over 50,000 drivers who've made the switch to AutoDrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AutoDrive Sport has completely changed my perspective on electric vehicles. The performance is incredible!",
                name: "James Chen",
                location: "Singapore",
                role: "Business Owner",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
              },
              {
                quote: "Best decision I've made. Zero emissions, zero compromise on luxury. It's the perfect blend of sustainability and comfort.",
                name: "Sarah Williams",
                location: "Melbourne",
                role: "Environmental Consultant",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
              },
              {
                quote: "The technology is years ahead of anything else. It truly feels like driving a car from the future.",
                name: "Michael Rodriguez",
                location: "San Francisco",
                role: "Tech Executive",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#00FF88" stroke="#00FF88" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full bg-cover bg-center ring-2 ring-gray-200"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                  <div>
                    <p className="font-bold text-[#0a0a0a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0066FF] via-[#0052cc] to-[#0066FF] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the future of driving. Schedule your test drive today.
          </p>

          <div className="inline-flex items-center gap-2 mb-12 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
            <Check size={20} className="text-[#00FF88]" />
            <span className="font-semibold">Over 50,000 vehicles delivered worldwide</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-[#0066FF] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
              Order Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 hover:border-white text-white px-10 py-5 rounded-full text-lg font-bold transition-all">
              Find a Showroom
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#0052cc] rounded-lg flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold">AutoDrive</div>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                Experience the future of driving with 100% electric performance, zero emissions, and cutting-edge technology.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10 hover:border-white/20"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: 'Products', links: ['Models', 'Technology', 'Charging', 'Accessories'] },
              { title: 'Company', links: ['About Us', 'Careers', 'News', 'Contact'] },
              { title: 'Support', links: ['Help Center', 'Service', 'Warranty', 'Find a Showroom'] }
            ].map((column, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-4 text-white">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AutoDrive. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
