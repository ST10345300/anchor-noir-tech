import { motion } from 'motion/react';
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import { Button } from '../components/ui/button';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Startup Websites',
      description: 'Launch your startup with a stunning, high-converting website that tells your story and drives growth.',
      features: [
        'Custom responsive design',
        'SEO optimization',
        'Lightning-fast performance',
        'Content management system',
        'Analytics integration',
      ],
      color: '#4A5BFF',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps (iOS & Android)',
      description: 'Native mobile applications that deliver exceptional user experiences on both iOS and Android platforms.',
      features: [
        'Native iOS & Android development',
        'Cross-platform solutions',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
      ],
      color: '#7B88FF',
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to solve your unique business challenges and scale with your growth.',
      features: [
        'Custom web applications',
        'API development & integration',
        'Database architecture',
        'Cloud deployment',
        'Ongoing maintenance & support',
      ],
      color: '#9B9FFF',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create delightful digital experiences.',
      features: [
        'User research & testing',
        'Wireframing & prototyping',
        'Visual design',
        'Design systems',
        'Usability optimization',
      ],
      color: '#4A5BFF',
    },
    {
      icon: Sparkles,
      title: 'Branding',
      description: 'Comprehensive brand identity that captures your essence and resonates with your target audience.',
      features: [
        'Logo design',
        'Brand guidelines',
        'Color palette & typography',
        'Marketing materials',
        'Brand strategy',
      ],
      color: '#7B88FF',
    },
    {
      icon: Layers,
      title: 'Digital Experiences',
      description: 'Immersive interactive experiences that engage users and leave lasting impressions.',
      features: [
        'Interactive animations',
        'Micro-interactions',
        '3D elements',
        'Motion design',
        'Creative web experiences',
      ],
      color: '#9B9FFF',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals, audience, and requirements through in-depth consultation.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand.',
    },
    {
      step: '04',
      title: 'Development',
      description: 'Our developers bring designs to life with clean, scalable, and performant code.',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures everything works flawlessly across all devices and browsers.',
    },
    {
      step: '06',
      title: 'Launch & Support',
      description: 'We launch your project and provide ongoing support to ensure continued success.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 bg-[#050505]"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/20 text-[#4A5BFF] mb-6 backdrop-blur-xl border border-white/10">
            <Sparkles size={16} />
            <span className="text-sm">What We Offer</span>
          </div>

          <h1 className="mb-6 text-white">Our Services</h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions designed to help your startup succeed in the modern digital landscape
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* GLASSMORPHIC CARD – original spacing kept */}
              <div
                className="
                  h-full p-8 rounded-3xl
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  hover:border-[#4A5BFF]/40
                  transition-all duration-300
                  shadow-lg hover:shadow-[#4A5BFF]/20
                "
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}25 0%, ${service.color}05 100%)`,
                  }}
                >
                  <service.icon size={32} style={{ color: service.color }} />
                </div>

                <h3 className="mb-3 text-white">{service.title}</h3>

                <p className="text-white/60 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2
                        size={20}
                        className="text-[#4A5BFF] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-gradient-to-br from-black via-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/20 text-[#4A5BFF] mb-4 backdrop-blur-xl border border-white/10">
              <Sparkles size={16} />
              <span className="text-sm">Our Process</span>
            </div>

            <h2 className="text-white mb-4">How We Work</h2>

            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A proven process that ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* GLASSMORPHIC PROCESS CARD — spacing unchanged */}
                <div
                  className="
                    p-6 rounded-2xl
                    bg-white/5 backdrop-blur-2xl
                    border border-white/10
                    hover:border-[#4A5BFF]/40
                    transition-all duration-300
                  "
                >
                  <div className="text-5xl font-bold text-[#4A5BFF]/20 mb-4">
                    {item.step}
                  </div>

                  <h4 className="mb-3 text-white">{item.title}</h4>

                  <p className="text-white/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A5BFF] to-[#7B88FF]" />

          <div className="relative z-10 px-8 py-16 md:px-16 text-center">
            <h2 className="text-white mb-4">Ready to Get Started?</h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>

            <Button
              className="bg-white text-[#4A5BFF] hover:bg-white/90 rounded-2xl px-8 py-6 shadow-xl group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
