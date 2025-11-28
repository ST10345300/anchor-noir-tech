import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Startup Websites',
    'Mobile Apps',
    'Custom Software',
    'UI/UX Design',
    'Branding',
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@anchornoir.studio', label: 'Email' },
  ];

  return (
    <footer className="bg-[#070708] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">AN</span>
              </div>
              <span className="font-bold">Anchor Noir Studios</span>
            </div>
            <p className="text-[#A8A8A8] mb-6">
              Building exceptional digital experiences for modern startups.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#4A5BFF] flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A8A8A8] hover:text-[#4A5BFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#A8A8A8]">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#4A5BFF] mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@anchornoir.studio"
                  className="text-[#A8A8A8] hover:text-[#4A5BFF] transition-colors"
                >
                  hello@anchornoir.studio
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#4A5BFF] mt-1 flex-shrink-0" />
                <span className="text-[#A8A8A8]">+27 (062) 071-0311</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#4A5BFF] mt-1 flex-shrink-0" />
                <span className="text-[#A8A8A8]">CPT, South Africa</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p className="text-[#A8A8A8] text-sm">
              © {new Date().getFullYear()} Anchor Noir Studios. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="/privacy-policy"
                className="text-[#A8A8A8] hover:text-[#4A5BFF] transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-[#A8A8A8] hover:text-[#4A5BFF] transition-colors"
              >
                Terms of Service
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
