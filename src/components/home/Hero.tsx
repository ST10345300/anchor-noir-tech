import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Interactive3DCode } from './Interactive3DCode';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#070708]">
      
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-[#4A5BFF]/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#4A5BFF] mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm">Premium Digital Solutions</span>
            </motion.div>

            <h1 className="mb-6 text-white">
              Powering the Digital Vision of <span className="gradient-text">Startups</span>
            </h1>

            <p className="text-xl text-[#A8A8A8] mb-8">
              We build custom websites, mobile apps, and software for modern businesses that want to make an impact.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Go to Contact Page */}
              <Button
                className="glass-button text-white rounded-2xl px-8 py-6 shadow-glow-hover transition-all duration-300 group"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Go to Case Studies Page */}
              <Button
                variant="outline"
                className="glass border-[#4A5BFF]/30 text-white hover:bg-[#4A5BFF]/10 rounded-2xl px-8 py-6 transition-all duration-300"
                asChild
              >
                <a href="/case-studies">See Our Work</a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-[#A8A8A8]">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-[#A8A8A8]">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-sm text-[#A8A8A8]">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative h-[500px] lg:h-[600px]">
            <Interactive3DCode />
          </div>

        </div>
      </div>
    </section>
  );
}
