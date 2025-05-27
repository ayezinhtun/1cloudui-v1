import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import heineken from '../img/customers/Heineken-150x150.png';
import moee from '../img/customers/MOEE-150x150.png';
import mandalay_hill_resort from '../img/customers/Mandalay-Hill-Resort-150x150.png';
import mottama from '../img/customers/Mottama-150x150.png';
import mpt from '../img/customers/MPT-150x150.png';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  BarChart, 
  Workflow, 
  Users, 
  Award,
  CheckCircle
} from 'lucide-react';

const servicesData = [
  {
    icon: <Server className="w-6 h-6 text-blue-600" />,
    title: 'IT Infrastructure and System Integration Services',
    description: [
      "Server Consolidation/ Virtualization",
      "High Availability/ Redundancy Solutions ",
      "Fault Tolerant Solution & Hyper-Converged Infrastructure ",
      "Wireless Infrastructure & BYOD Solutions ",
      "Infrastructure Upgrade & Migration  ",
      "IT Infrastructure Setup for New Offices & Relocation ",
      "DC/DR Core Network Solutions",
      "WAN infrastructure",
    ]
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    title: 'Cloud and Managed Services',
    description: [
      "Private and Public Solutions",
      "Hybrid Solutions",
      "Unified Communications ",
      "Telepresence and Teleconference Solutions ",
      "VOIP Solutions ",
    ],
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: 'Data Center ​Services​',
    description: [
      "Active-Active DC/DR Solutions",
      "Storage & Backup Solutions",
      "Project Management ",
      "Delivering Cost Effective & Quality Solutions ",
      "Software Defined Networking (SDN) and Virtualization",
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: 'Security and Compliance Services',
    description: [
      "Advanced Persistent Threat Protection ",
      "Compliance Management ",
      "Cybersecurity & Risk Management",
      "Enabling & Optimizing SSL/TLS ",
      "Web Application Firewalls ",
      "DDoS Protection ",
      "Data Center and Enterprise Security",
      "PCI Compliant Solutions",
      "Next Generation Firewalls ",
      "Access Control and AAA ",
    ],  }
];

const statsData = [
  { value: '20+', label: 'Technology Partners' },
  { value: '100+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '15+', label: 'Countries Served' }
];

const clientLogos = [
  heineken,moee,mandalay_hill_resort,mottama,mpt,
];

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Services section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We deliver comprehensive integration solutions to help your business 
              operate more efficiently and effectively.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg hover:bg-blue-50"
              >
                <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {service.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* About/Why choose us section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose OneCloud?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in connecting your critical business systems and optimizing
                workflows with our expertise in system integration. Our team delivers
                tailored solutions that drive efficiency and growth.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Expert team with deep technical knowledge',
                  'Customized solutions for your unique challenges',
                  'End-to-end service from planning to implementation',
                  'Ongoing support and optimization',
                  'Partnership approach focused on your success'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team working on system integration"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-900/40 mix-blend-multiply"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Trusted Clients
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We've helped companies across industries modernize their systems 
              and unlock new business potential.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center hover:grayscale-0 transition-all"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={logo} alt={`Client ${index + 1}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          
          <div className="text-center mt-12">
            <Link
              to="/customers"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              View All Customers
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our system integration solutions can help you achieve your business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;