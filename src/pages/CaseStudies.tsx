import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

export function CaseStudies() {
  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      client: 'TechFlow Inc.',
      year: '2024',
      description: 'A comprehensive financial analytics platform with real-time data visualization and advanced reporting features.',
      challenge: 'Create an intuitive interface for complex financial data that non-technical users could easily understand.',
      solution: 'We designed a clean, modular dashboard with interactive charts and simplified data presentation.',
      results: [
        '300% increase in user engagement',
        '50% reduction in support tickets',
        '95% user satisfaction score',
      ],
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzOTA2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js'],
      color: '#4A5BFF',
    },
    {
      title: 'Mobile App',
      category: 'iOS & Android',
      client: 'HealthHub',
      year: '2024',
      description: 'Health tracking app with AI-powered recommendations, social features, and gamification elements.',
      challenge: 'Build a cross-platform app that motivates users to maintain healthy habits consistently.',
      solution: 'We created an engaging UX with personalized AI recommendations and social accountability features.',
      results: [
        '100K+ downloads in first month',
        '4.8 star rating on App Store',
        '85% user retention rate',
      ],
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NjM5MTI2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'AI/ML', 'Node.js'],
      color: '#7B88FF',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      client: 'DataSync Corp.',
      year: '2023',
      description: 'Modern e-commerce solution with advanced analytics, inventory management, and seamless checkout.',
      challenge: 'Develop a scalable platform that could handle high traffic during peak sales periods.',
      solution: 'We built a robust architecture with microservices, CDN integration, and optimized database queries.',
      results: [
        '99.9% uptime during Black Friday',
        '200% increase in conversion rate',
        '40% faster page load times',
      ],
      image: 'https://images.unsplash.com/photo-1606244667418-55d798703600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzk0NjYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
      color: '#9B9FFF',
    },
    {
      title: 'SaaS Platform Redesign',
      category: 'UI/UX Design',
      client: 'CloudStream',
      year: '2023',
      description: 'Complete redesign of a SaaS platform to improve usability and modern appeal.',
      challenge: 'Modernize an outdated interface without disrupting existing user workflows.',
      solution: 'We conducted extensive user research and implemented incremental design improvements.',
      results: [
        '45% improvement in task completion',
        '60% reduction in learning curve',
        '92% positive user feedback',
      ],
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzOTA2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Figma', 'User Research', 'Design System', 'Prototyping'],
      color: '#4A5BFF',
    },
    {
      title: 'Brand Identity System',
      category: 'Branding',
      client: 'Innovate Labs',
      year: '2023',
      description: 'Complete brand identity including logo, guidelines, and marketing materials for a tech startup.',
      challenge: 'Create a distinctive brand that stands out in a crowded tech market.',
      solution: 'We developed a bold, modern identity with a unique color palette and consistent visual language.',
      results: [
        '150% increase in brand recognition',
        'Featured in major tech publications',
        '300% social media growth',
      ],
      image: 'https://images.unsplash.com/photo-1606244667418-55d798703600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzk0NjYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Branding', 'Logo Design', 'Guidelines', 'Marketing'],
      color: '#7B88FF',
    },
    {
      title: 'Interactive Web Experience',
      category: 'Digital Experience',
      client: 'Creative Studio',
      year: '2022',
      description: 'Award-winning interactive website with advanced animations and 3D elements.',
      challenge: 'Create a memorable digital experience that showcases the client\'s creative capabilities.',
      solution: 'We combined 3D graphics, scroll-based animations, and interactive elements for an immersive experience.',
      results: [
        'Winner of 3 design awards',
        '500% increase in portfolio inquiries',
        '90% session engagement time',
      ],
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzOTA2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Three.js', 'GSAP', 'WebGL', 'Animation'],
      color: '#9B9FFF',
    },
  ];

  const categories = ['All', 'Web Application', 'iOS & Android', 'Full Stack', 'UI/UX Design', 'Branding', 'Digital Experience'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/10 text-[#4A5BFF] mb-6">
            <Sparkles size={16} />
            <span className="text-sm">Our Work</span>
          </div>
          <h1 className="mb-6">Case Studies</h1>
          <p className="text-xl text-[#A8A8A8] max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped startups and businesses achieve their goals
          </p>
        </motion.div>
      </div>

      {/* Filter Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-border hover:border-[#4A5BFF] hover:bg-[#4A5BFF]/5 transition-all duration-300 text-sm"
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-[#070708]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm text-[#070708]">
                      {project.category}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className="bg-white text-[#070708] hover:bg-white/90 rounded-2xl shadow-xl"
                      size="sm"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-sm text-[#A8A8A8] mb-2">
                    {project.client} • {project.year}
                  </div>
                  <h2 className="mb-4">{project.title}</h2>
                  <p className="text-[#A8A8A8] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2">Challenge</h4>
                      <p className="text-[#A8A8A8]">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="mb-2">Solution</h4>
                      <p className="text-[#A8A8A8]">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="mb-3">Results</h4>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-[#070708]">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: project.color }}
                            />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="mt-8 border-2 border-[#070708] text-[#070708] hover:bg-[#070708] hover:text-white rounded-2xl px-6 group"
                  >
                    <span className="flex items-center gap-2">
                      View Full Case Study
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
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
            <h2 className="text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <Button
              className="bg-white text-[#4A5BFF] hover:bg-white/90 rounded-2xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}