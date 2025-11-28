import { motion } from "motion/react";
import { Interactive3DCode } from "../components/home/Interactive3DCode"; // adjust path if needed

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      text: "By using Anchor Noir Studios' services, you agree to these Terms. If you do not agree, you may not access our platform or work with us.",
    },
    {
      title: "2. Services Provided",
      text: "We provide digital services including websites, apps, branding, UI/UX, and custom software. Each project has its own agreed scope.",
    },
    {
      title: "3. Client Responsibilities",
      text: "Clients must provide accurate information, timely feedback, project content, and approvals. Delays from the client will extend delivery timelines.",
    },
    {
      title: "4. Payments & Billing",
      text: "Payments and deposits must be made as outlined in your project proposal. Work begins once the required deposit is received.",
    },
    {
      title: "5. Intellectual Property",
      text: "Final deliverables belong to the client once fully paid. We may showcase work in our portfolio unless otherwise agreed.",
    },
    {
      title: "6. Project Timelines",
      text: "Timelines are estimates and may shift depending on revisions, delays, content delivery, or unforeseen issues.",
    },
    {
      title: "7. Limitation of Liability",
      text: "Anchor Noir Studios is not liable for indirect damages, losses, or issues caused by third-party tools or services.",
    },
    {
      title: "8. Amendments",
      text: "We may update these Terms periodically. Continued use of our website or services means you accept the revised Terms.",
    },
    {
      title: "9. Contact Us",
      text: "For questions regarding these Terms, contact us at: hello@anchornoir.studio",
    },
  ];

  return (
    <section className="min-h-screen bg-[#070708] pt-80 pb-32 px-6 relative overflow-hidden">

  {/* Lowered background glows */}
  <div className="absolute top-[500px] right-[-250px] w-[550px] h-[550px] bg-[#4A5BFF]/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-24 left-[-250px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* HERO SECTION */}
    <div className="grid lg:grid-cols-2 gap-20 items-center mt-20 mb-24">

      {/* LEFT – Interactive 3D Code */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="h-[420px] lg:h-[500px] flex items-center justify-center translate-y-10"
      >
        <Interactive3DCode />
      </motion.div>

      {/* RIGHT – Title + Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="translate-y-10"
      >
        <h1 className="text-white text-6xl font-extrabold leading-tight mb-6">
          Terms of Service
        </h1>

        <p className="text-white/60 text-lg mb-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="text-white/70 text-xl leading-relaxed">
          Please review our terms carefully. By accessing or using our services,
          you acknowledge and agree to be bound by the following conditions.
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
