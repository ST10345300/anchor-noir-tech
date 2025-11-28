import { motion } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Daniel M.',
      image:
        'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=800&q=80',
      content:
        'Anchor Noir Studios brought our brand to life. Their attention to detail and understanding of modern digital identity are unmatched.',
      rating: 5,
    },
    {
      name: 'Amina K.',
      image:
        'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      content:
        'Working with this team has been a game changer. The website they built doubled our conversions in under 60 days.',
      rating: 5,
    },
    {
      name: 'Jamal R.',
      image:
        'https://images.unsplash.com/photo-1543353071-087092ec393c?auto=format&fit=crop&w=800&q=80',
      content:
        'Professional, fast, and incredibly talented. Our new platform works flawlessly and looks world-class.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-[#070708] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#4A5BFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#4A5BFF] mb-4">
            <Sparkles size={16} />
            <span className="text-sm">Testimonials</span>
          </div>
          <h2 className="mb-4 text-white">What Our Clients Say</h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            Real feedback from founders and brands we've partnered with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl glass-card hover:border-[#4A5BFF]/30 transition-all duration-300 hover:shadow-glow h-full">
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#4A5BFF] text-[#4A5BFF]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#4A5BFF]/20">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4A5BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
