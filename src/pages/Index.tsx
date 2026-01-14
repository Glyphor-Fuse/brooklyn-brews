import React from 'react';
import { motion } from 'framer-motion';
import { LuCoffee, LuMapPin, LuArrowRight, LuClock, LuInstagram, LuMenu, LuX } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureEffect } from '../components/effects/SignatureEffect';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-dark)] font-sans selection:bg-[var(--color-accent)] selection:text-white">
      {/* Sticky Progress Bar */}
      <SignatureInteraction 
        type="sticky-progress" 
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] z-50"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-[#F5F5F0]">
        <div className="font-serif text-2xl tracking-tighter">
          BROOKLYN BREWS
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">SHOP</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">LOCATIONS</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">ABOUT</a>
        </div>
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LuX /> : <LuMenu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[var(--color-dark)] text-[var(--color-bg)] z-30 flex flex-col items-center justify-center gap-8 font-serif text-4xl"
        >
          <a href="#" onClick={() => setIsMenuOpen(false)}>SHOP</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>LOCATIONS</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <SignatureInteraction type="parallax" className="h-[120%] w-full">
             <img 
               src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
               alt="Coffee Shop Interior" 
               className="w-full h-full object-cover"
             />
           </SignatureInteraction>
        </div>
        
        <div className="relative z-10">
          <Reveal>
            <h1 className="font-serif text-6xl md:text-9xl leading-[0.9] mb-6">
              CRAFTED<br/>
              <span className="text-[var(--color-accent)]">IN BROOKLYN</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="font-mono text-sm md:text-base max-w-md mx-auto mb-12 uppercase tracking-widest">
              Small batch roasting for the creative mind. 
              Fueling the hustle since 2023.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <SignatureEffect effect="magnetic">
              <button className="group bg-[var(--color-dark)] text-[var(--color-bg)] px-8 py-4 font-mono text-sm hover:bg-[var(--color-accent)] transition-colors flex items-center gap-2">
                ORDER ONLINE
                <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </SignatureEffect>
          </Reveal>
        </div>
      </header>

      {/* Marquee Section */}
      <section className="py-12 border-y border-[var(--color-dark)] bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-xl md:text-3xl overflow-hidden">
        <SignatureInteraction 
          type="marquee" 
          text="FRESH ROAST • ETHICALLY SOURCED • BROOKLYN NY • OPEN 7 DAYS • COLD BREW • ESPRESSO • "
        />
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div>
          <SignatureInteraction type="text-reveal">
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              NOT JUST<br/>COFFEE.
            </h2>
          </SignatureInteraction>
          <Reveal>
            <p className="font-sans text-lg leading-relaxed text-gray-600 mb-8">
              We believe in the ritual of coffee. It's not just about the caffeine kick; it's about the pause in your day, the warmth in your hand, and the connection with your community. Every bean is sourced with care and roasted to highlight its unique character.
            </p>
            <div className="flex gap-8 font-mono text-sm">
              <div className="flex items-center gap-2">
                <LuCoffee className="text-[var(--color-accent)] text-xl" />
                <span>SINGLE ORIGIN</span>
              </div>
              <div className="flex items-center gap-2">
                <LuClock className="text-[var(--color-accent)] text-xl" />
                <span>ROASTED DAILY</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        <SignatureInteraction type="clip-reveal" className="aspect-[4/5] w-full">
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop" 
            alt="Latte Art" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </SignatureInteraction>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-[#EBEBE5]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal width="100%">
            <div className="flex justify-between items-end mb-16 border-b border-[var(--color-dark)] pb-4">
              <h2 className="font-serif text-5xl">MENU</h2>
              <span className="font-mono text-sm">EST. 2023</span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { name: "ESPRESSO", price: "4.00", desc: "Double shot, rich & creamy" },
              { name: "CORTADO", price: "4.50", desc: "Espresso cut with warm milk" },
              { name: "POUR OVER", price: "5.50", desc: "Rotating single origin selection" },
              { name: "COLD BREW", price: "5.00", desc: "Steeped 24h, smooth finish" },
              { name: "MATCHA", price: "6.00", desc: "Ceremonial grade, oat milk" },
              { name: "BATCH BREW", price: "3.50", desc: "Quick, hot, and delicious" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-[var(--color-bg)] p-8 border border-transparent hover:border-[var(--color-dark)] transition-colors"
              >
                <div className="flex justify-between font-serif text-2xl mb-2">
                  <h3>{item.name}</h3>
                  <span>${item.price}</span>
                </div>
                <p className="font-mono text-xs text-gray-500 uppercase">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Footer */}
      <footer className="bg-[var(--color-dark)] text-[var(--color-bg)] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-6xl md:text-8xl mb-12 text-[var(--color-accent)]">
              VISIT US
            </h2>
            <div className="space-y-8 font-mono">
              <div className="flex items-start gap-4">
                <LuMapPin className="text-2xl mt-1 shrink-0" />
                <div>
                  <p>123 Wythe Avenue</p>
                  <p>Brooklyn, NY 11249</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LuClock className="text-2xl mt-1 shrink-0" />
                <div>
                  <p>Mon - Fri: 7am - 7pm</p>
                  <p>Sat - Sun: 8am - 8pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="flex gap-4 text-3xl mb-12">
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><LuInstagram /></a>
            </div>
            <div className="font-mono text-sm opacity-50">
              <p>&copy; 2023 BROOKLYN BREWS.</p>
              <p>DESIGNED IN NYC.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}