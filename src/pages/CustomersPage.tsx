import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Globe,
  Server,
  Shield,
  Users,
  Check,
  Star,
  ArrowRight
} from 'lucide-react';

import Bloomberg_data from '../img/customers/Bloomberg-Data-for-Health-Initiative-150x150.png';
import Community_Partners from '../img/customers/Community-Partners-150x150.png';
import GTL from '../img/customers/GTL-150x150.png';
import GTMH from '../img/customers/GTMH-150x150.png';
import Heineken from '../img/customers/Heineken-150x150.png';
import Hotel_Max from '../img/customers/Hotel-Max-150x150.png';
import IKBZ from '../img/customers/IKBZ-150x150.png';
import im_net from '../img/customers/im-net-150x150.png';
import Law from '../img/customers/Law-150x150.png';
import Mandalay_City from '../img/customers/Mandalay-City-Development-150x150.png';
import Mandalay_Hill from '../img/customers/Mandalay-Hill-Resort-150x150.png';
import MCB from '../img/customers/MCB-150x150.png';
import MCM from '../img/customers/MCM-150x150.png';
import Ministry from '../img/customers/Ministry-of-Transport-150x150.png';
import MOEE from '../img/customers/MOEE-150x150.png';
import Mottama from '../img/customers/Mottama-150x150.png';
import MPT from '../img/customers/MPT-150x150.png';
import Myanmar from '../img/customers/Myanmar-150x150.png';
import Myanmar_red from '../img/customers/Myanmar-Red-Cross-150x150.png';
import N_Health from '../img/customers/N-Health-1-150x150.png';
import Ooredoo from '../img/customers/Ooredoo-150x150.png';
import Path from '../img/customers/Path-150x150.png';
import Sakura from '../img/customers/Sakura-150x150.png';
import state from '../img/customers/State-of-Qatar-150x150.png';
import UMG from '../img/customers/UMG-150x150.png';
import umg from '../img/customers/umg-college-150x150.png';
import umtgi from '../img/customers/UMTGI-150x150.png';
import wilmar from '../img/customers/wilmar-150x150.png';
import yangon from '../img/customers/Yangon-150x150.png';


const customers = [
  {
    id: 1,
    logo: Bloomberg_data,
    name: 'Bloomberg_data'
  },
  {
    id: 2,
    logo: Community_Partners,
    name: 'Community_Partners'
  },
  {
    id: 3,
    logo: GTL,
    name: 'GTL'
  },
    {
    id: 4,
    logo: GTMH,
    name: 'GTMH'
  },
   {
    id: 5,
    logo: Heineken,
    name: 'Heineken'
  },
   {
    id: 6,
    logo: Hotel_Max,
    name: 'Hotel_Max'
  },
   {
    id: 7,
    logo: IKBZ,
    name: 'IKBZ'
  },
   {
    id: 8,
    logo: im_net,
    name: 'im_net'
  },
  {
    id: 9,
    logo: Law ,
    name: 'Law '
  },
  {
    id: 10,
    logo: Mandalay_City,
    name: 'Mandalay_City'
  },
  {
    id: 11,
    logo: Mandalay_Hill,
    name: 'Mandalay_Hill'
  },
  {
    id: 12,
    logo: MCB,
    name: 'MCB'
  },
  {
    id: 13,
    logo: MCM,
    name: 'MCM'
  },
  {
    id: 14,
    logo: Ministry,
    name: 'Ministry'
  },
  {
    id: 15,
    logo: MOEE,
    name: 'MOEE'
  },
  {
    id: 16,
    logo: Mottama,
    name: 'Mottama'
  },
  {
    id: 17,
    logo: MPT,
    name: 'MPT'
  },
  {
    id: 18,
    logo: Myanmar,
    name: 'Myanmar'
  },
  {
    id: 19,
    logo: Myanmar_red,
    name: 'Myanmar_red'
  },
  {
    id: 20,
    logo: N_Health,
    name: 'N_Health'
  },
  {
    id: 21,
    logo: Ooredoo,
    name: 'Ooredoo'
  },
  {
    id: 22,
    logo: Path,
    name: 'Path'
  },
  {
    id: 23,
    logo: Sakura,
    name: 'Sakura'
  },
  {
    id: 24,
    logo: state,
    name: 'state'
  },
  {
    id: 25,
    logo: UMG,
    name: 'UMG'
  },
  {
    id: 26,
    logo: umg,
    name: 'umg'
  },
  {
    id: 27,
    logo: umtgi,
    name: 'umtgi'
  },
  {
    id: 28,
    logo: wilmar,
    name: 'wilmar'
  },
   {
    id: 29,
    logo: yangon,
    name: 'yangon'
  },

]




const CustomersPage: React.FC = () => {
  
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Customers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Discover how leading businesses across industries have transformed 
            their operations with our integration solutions.
          </motion.p>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 md:h-16">
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="fill-white"
            />
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              className="fill-white"
            />
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="fill-white"
            />
          </svg>
        </div>
      </section>
      
      {/* Customer statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: <Building className="w-10 h-10 text-blue-600" />,
                value: '200+',
                label: 'Clients Worldwide'
              },
              { 
                icon: <Globe className="w-10 h-10 text-blue-600" />,
                value: '15+',
                label: 'Countries Served'
              },
              { 
                icon: <Server className="w-10 h-10 text-blue-600" />,
                value: '500+',
                label: 'Integration Projects'
              },
              { 
                icon: <Star className="w-10 h-10 text-blue-600" />,
                value: '98%',
                label: 'Client Satisfaction'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customer directory */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Browse our customer success stories and see how our solutions have 
              helped businesses across industries.
            </motion.p>
          </div>
          

          
          {/* Customers grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {customers.map((customer) => (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-30 flex items-center justify-center p-4 border-b border-gray-200">
                  <div className="w-30 h-30 flex items-center justify-center overflow-hidden">
                    {customer.logo ? (
                      <img 
                        src={customer.logo} 
                        alt={`${customer.name} logo`} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-gray-500 font-semibold">Logo {customer.id}</span>
                    )}
                  </div>
                  
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Hear directly from our clients about their experience working with us.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                quote: "OneCloud's integration solutions have transformed how our organization operates. We've seen significant improvements in efficiency and data accuracy.",
                author: "Sarah Johnson",
                position: "CIO, Global Health Systems",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The expertise and support from the OneCloud team have been exceptional. They truly understood our business challenges and delivered solutions that exceeded our expectations.",
                author: "Michael Chen",
                position: "VP of Technology, Financial Services Inc.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries we serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Our integration solutions are tailored to meet the unique needs of 
              various industries.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'Healthcare',
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                description: 'Secure integration solutions for healthcare providers, improving patient care and operational efficiency.'
              },
              {
                industry: 'Finance',
                icon: <Building className="w-12 h-12 text-blue-600" />,
                description: 'Robust financial system integration that ensures data accuracy and regulatory compliance.'
              },
              {
                industry: 'Manufacturing',
                icon: <Server className="w-12 h-12 text-blue-600" />,
                description: 'Streamlined integration of production systems, supply chain, and business operations.'
              },
              {
                industry: 'Retail',
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                description: 'Omnichannel integration solutions that connect online and in-store experiences.'
              },
              {
                industry: 'Technology',
                icon: <Users className="w-12 h-12 text-blue-600" />,
                description: 'Advanced integration platforms for tech companies to accelerate innovation and growth.'
              },
              {
                industry: 'Education',
                icon: <Users className="w-12 h-12 text-blue-600" />,
                description: 'Educational system integration that improves administrative efficiency and student experiences.'
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{industry.industry}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
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
            Ready to Join Our Success Stories?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss how our integration solutions can help your business thrive.
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
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomersPage;