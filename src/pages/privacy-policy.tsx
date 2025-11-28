import { motion } from "motion/react";
import { Interactive3DCode } from "../components/home/Interactive3DCode"; // adjust path if needed

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      text: "We collect personal details such as your name, email, phone number, and project details when you submit forms or contact us.",
    },
    {
      title: "2. How We Use Your Information",
      text: "Your information is used to communicate with you, manage your project, provide services, process requests, and improve your experience.",
    },
    {
      title: "3. Third-Party Services",
      text: "We use secure third-party tools for hosting, analytics, form processing, emailing, and project management. Each provider has its own privacy policies.",
    },
    {
      title: "4. Data Protection",
      text: "We use strong security measures such as encrypted storage and restricted access to protect your information from unauthorized access.",
    },
    {
      title: "5. Cookies & Tracking",
      text: "We may use cookies or tracking tools to improve site functionality and user experience. You may disable cookies in your browser settings.",
    },
    {
      title: "6. Your Rights",
      text: "You may request access, updates, or deletion of your personal data at any time by contacting us.",
    },
    {
      title: "7. Policy Updates",
      text: "We may update this Privacy Policy occasionally. Continued use of our site means you accept updated terms.",
    },
    {
      title: "8. Contact Us",
      text: "For privacy-related questions, reach us at: hello@anchornoir.studio",
    },
  ];

  return (
    <section className="min-h-screen bg-[#070708] pt-80 pb-32 px-6 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-[500px] right-[-250px] w-[550px] h-[550px] bg-[#4A5BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-[-250px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ======================= */}
        {/*       HERO SECTION      */}
        {/* ======================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20 mb-24">

          {/* LEFT — Interactive 3D Code */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[420px] lg:h-[500px] flex items-center justify-center translate-y-10"
          >
            <Interactive3DCode />
          </motion.div>

          {/* RIGHT — Title + Intro */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="translate-y-10"
          >
            <h1 className="text-white text-6xl font-extrabold leading-tight mb-6">
              Privacy Policy
            </h1>

            <p className="text-white/60 text-lg mb-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <p className="text-white/70 text-xl leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your information.
            </p>
          </motion.div>

        </div>

        {/* ======================= */}
        {/*         CARDS GRID      */}
        {/* ======================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                bg-white/5 
                p-8 
                rounded-3xl 
                border border-white/10 
                backdrop-blur-xl 
                shadow-[0_0_25px_-8px_rgba(74,91,255,0.4)]
                hover:shadow-[0_0_45px_-6px_rgba(74,91,255,0.5)]
                hover:border-[#4A5BFF]/30
                transition-all duration-300
              "
            >
              <h2 className="text-white text-2xl font-bold mb-4">
                {section.title}
              </h2>

              <p className="text-white/75 text-lg leading-relaxed">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
