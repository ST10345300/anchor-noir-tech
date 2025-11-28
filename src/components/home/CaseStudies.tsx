import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useNavigate, Link } from "react-router-dom";
import React from "react";

export function CaseStudies() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description:
        "A comprehensive financial analytics platform with real-time data visualization",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Wellness Mobile App",
      category: "iOS & Android",
      description:
        "Health tracking app with AI-powered recommendations and social features",
      image:
        "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React Native", "Firebase", "AI/ML"],
    },
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      description:
        "Modern e-commerce solution with advanced analytics and inventory management",
      image:
        "https://images.unsplash.com/photo-1606244667418-55d798703600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="case-studies"
      className="py-24 bg-[#070708] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4A5BFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#4A5BFF] mb-4">
            <Sparkles size={16} />
            <span className="text-sm">Our Work</span>
          </div>

          <h2 className="mb-4 text-white">Featured Case Studies</h2>

          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've
            helped startups grow
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => navigate("/case-studies")}
            >
              <div className="relative rounded-3xl overflow-hidden glass-card hover:shadow-[0_0_25px_#4A5BFF55] transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-[#070708]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass text-xs text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-white group-hover:text-[#4A5BFF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#A8A8A8] mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#4A5BFF]/20 text-[#4A5BFF] text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/case-studies"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      e.stopPropagation()
                    }
                  >
                    <Button
                      variant="outline"
                      className="
                        flex items-center gap-2
                        text-[#4A5BFF]
                        border-[#4A5BFF]/40
                        hover:bg-[#4A5BFF]/10
                        rounded-xl px-4 py-2 group
                        transition-all relative
                        hover:shadow-[0_0_15px_#4A5BFF55]
                      "
                    >
                      <span>View Case Study</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="glass border-[#4A5BFF]/30 text-white hover:bg-[#4A5BFF]/10 rounded-2xl px-8 py-6"
            asChild
          >
            <Link to="/case-studies">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
