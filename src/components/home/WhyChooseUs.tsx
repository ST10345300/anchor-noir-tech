import { motion } from 'motion/react';
import { Zap, Shield, Users, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology for blazing-fast load times.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise grade security and 99.9% uptime guarantee for peace of mind.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience in startup development.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from MVP to enterprise scale.',
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
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#4A5BFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
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
            <span className="text-sm">Why Us</span>
          </div>
          <h2 className="mb-4 text-white">Why Choose Anchor Noir Studios</h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            We combine technical excellence with creative innovation to deliver exceptional results
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-blue flex items-center justify-center shadow-glow"
              >
                <feature.icon size={36} className="text-white" />
              </motion.div>
              <h4 className="mb-3 text-white">{feature.title}</h4>
              <p className="text-[#A8A8A8]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#4A5BFF]/5 to-purple-500/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="mb-6 text-white">Our Commitment to Excellence</h3>
              <p className="text-[#A8A8A8] mb-6 leading-relaxed">
                We don't just build products we create digital experiences that drive growth and delight users. Every project is treated with the same attention to detail and commitment to quality.
              </p>
              <div className="space-y-3">
                {[
                  'Agile development process',
                  'Regular progress updates',
                  'Post-launch support',
                  'Continuous optimization',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} className="text-[#4A5BFF] flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '15+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-md text-center"
                >
                  <div className="text-3xl font-bold text-[#4A5BFF] mb-2">{stat.number}</div>
                  <div className="text-sm text-[#A8A8A8]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}