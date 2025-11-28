import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Interactive3DCode } from "../components/home/Interactive3DCode";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as true partners.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every detail.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of trends to deliver cutting-edge solutions.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24"
    >
      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#4A5BFF] mb-6">
            <Sparkles size={16} />
            <span className="text-sm">About Us</span>
          </div>

          <h1 className="mb-6 text-white">Building Digital Excellence</h1>

          <p className="text-xl text-[#A8A8A8] max-w-3xl mx-auto">
            Anchor Noir Studios builds premium digital experiences for ambitious
            brands and startups  crafted with precision, clarity, and modern engineering.
          </p>
        </motion.div>
      </div>

      {/* -------------------------------------------------- */}
      {/* STORY SECTION */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — 3D Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full min-h-[550px] lg:min-h-[650px] flex items-center justify-center">
              <Interactive3DCode />
            </div>
          </motion.div>

          {/* RIGHT — Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-white">Our Story</h2>

            <div className="space-y-4 text-[#A8A8A8] leading-relaxed">
              <p>
                Anchor Noir Studios was founded with a mission to help startups succeed
                through premium digital experiences. What started as a vision evolved
                into a high-performance digital studio.
              </p>

              <p>
                We’ve worked with ambitious brands to launch products, scale businesses,
                and craft digital identities built for the future.
              </p>

              <p>
                Today, we continue pushing the boundaries of modern design, engineering,
                and motion  always putting client success first.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* MISSION & VISION */}
      {/* -------------------------------------------------- */}
      <div className="py-24 mb-32 bg-[#070708]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(74,91,255,0.3)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#4A5BFF]/20 flex items-center justify-center mb-6">
                <Target size={32} className="text-[#4A5BFF]" />
              </div>

              <h3 className="text-white mb-4">Our Mission</h3>

              <p className="text-[#A8A8A8] leading-relaxed">
                To empower founders and brands with digital products that merge beauty,
                precision and high-performance engineering.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(74,91,255,0.3)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#4A5BFF]/20 flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#4A5BFF]" />
              </div>

              <h3 className="text-white mb-4">Our Vision</h3>

              <p className="text-[#A8A8A8] leading-relaxed">
                To establish Anchor Noir Studios as Africa’s most innovative,
                design-driven digital studio  known for motion, clarity, and excellence.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* VALUES */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white">Our Values</h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            The principles that shape every decision and every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-blue flex items-center justify-center shadow-glow">
                <value.icon size={32} className="text-white" />
              </div>
              <h4 className="mb-2 text-white">{value.title}</h4>
              <p className="text-[#A8A8A8] text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* MEET THE FOUNDER */}
      {/* -------------------------------------------------- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/10 text-[#4A5BFF] mb-4">
            <Sparkles size={16} />
            <span className="text-sm">Founder</span>
          </div>

          <h2 className="mb-4 text-white">Meet the Founder</h2>
          <p className="text-lg text-[#A8A8A8] max-w-xl mx-auto">
            The driving force behind Anchor Noir Studios.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-64 h-80 mb-6">
            <ImageWithFallback
              src="/src/assets/founder.jpg"
              alt="Founder - Rubben Shisso"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-white text-2xl font-semibold">Rubben Shisso</h3>
          <p className="text-[#A8A8A8]">Founder & Creative Director</p>
        </div>
      </div>
    </motion.div>
  );
}
