import React from 'react';
import { color, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Layers, Shield } from 'lucide-react';

import A10 from '../img/partners/A10.png';
import APC from '../img/partners/APC.png';
import Check_point from '../img/partners/Check-Point-copy.png';
import Cisco_Gold from '../img/partners/Cisco-Gold-150x150.png';
import Dell_Platinum from '../img/partners/Dell-Platinum-150x150.png';
import f5 from '../img/partners/f5.png';
import Fortinet from '../img/partners/fortinet.png';
import Hewlett_Packard from '../img/partners/Hewlett-Packard.png';
import imperva from '../img/partners/imperva.jpg';
import Infoblox from '../img/partners/Infoblox-copy.png';
import Juniper from '../img/partners/juniper.png';
import Microsoft from '../img/partners/microsoft.png';
import paloalto from '../img/partners/paloalto-150x150.png';
import redhat from '../img/partners/redhat.png';
import sendQuick from '../img/partners/sendquick.png';
import Sophos from '../img/partners/sophos.png';
import splunk from '../img/partners/splunk.png';
import Symantec from '../img/partners/symantec.png';
import Trendmicro from '../img/partners/Trendmicro.png';
import Veritas from '../img/partners/veritas.png';
import VMware from '../img/partners/VMware-Advanced-150x150.png';
import zimbra from '../img/partners/zimbra.png';
import Seiko from '../img/partners/seiko.png';
import IBM from '../img/partners/IBM.png';
import Hillstone from '../img/partners/hillstone.png';
import lenovo from '../img/partners/lenovo.png';
import veeam from '../img/partners/veeam.jpg';
import Arista from '../img/partners/arista.png';
import Promox from '../img/partners/promox.png';
import Vinchin from '../img/partners/vinchin.png';

// const logoMap = {
//   'Tech Partner 1': A10,
//   'Tech Partner 2': APC,
//   'Tech Partner 3': Check_point,
//   'Tech Partner 4': Cisco_Gold,
//   'Tech Partner 5': Dell_Platinum,
//   'Tech Partner 6': f5,
//   'Tech Partner 7': Fortinet,
//   'Tech Partner 8': Hewlett_Packard,
//   'Tech Partner 9': imperva,
//   'Tech Partner 10': Infoblox,
//   'Tech Partner 11': Juniper,
//   'Tech Partner 12':  Microsoft,
//   'Tech Partner 13': paloalto ,
//   'Tech Partner 14': sendQuick,
//   'Tech Partner 15': Sophos,
//   'Tech Partner 16': splunk,
//   'Tech Partner 17': Symantec,
//   'Tech Partner 18': Trendmicro,
//   'Tech Partner 19':  VMware,
//   'Tech Partner 20': zimbra,
//   'Tech Partner 21': redhat,
//   'Tech Partner 22': Veritas,
// };

// const name = [
//   'A10', 'APC', 'Check-Point', 'Cisco-Gold', 'Dell-Platinum',
//   'f5', 'Fortinet', 'Hewlett-Packard', 'Imperva', 'Infoblox',
//   'Juniper', 'Microsoft', 'Paloalto',  'SendQuick',
//   'Sophos', 'Splunk', 'Symantec', 'Trendmicro','VMware-Advanced',  'zimbra','Veritas',
// ];
// const partnershipLevels = [
//   {
//     title: 'Premier Integrator Partner',
//     description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
//     color: 'bg-amber-100 text-amber-800 border-amber-300'
//   },
//   {
//     title: 'Innovator Partner',
//     description: 'Strategic collaborations with companies delivering exceptional solutions and services.',
//     color: 'bg-gray-100 text-gray-800 border-gray-300'
//   },
//   {
//     title: 'Gold Partner',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Register Partner',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Register Partner',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Reseller',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Advocate',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Ready',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'T2 Solution Provider',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Silver Partner',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Bronze',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
//   {
//     title: 'Authorized',
//     description: 'Growing relationships with promising technology providers in the integration space.',
//     color: 'bg-orange-100 text-orange-800 border-orange-300'
//   },
// ];

// Generate 20 sample partners

const Partners = [
   {
    id: 1,
    name: 'Palo Alto',
    level: 'Innovator Partner',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: paloalto,
    category: 'Software'
  },
  {
    id: 2,
    name: 'Cisco',
    level: 'Premier Integrator Partner',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: Cisco_Gold,
    category: 'Software'
  },
  
   {
    id: 3,
    name: 'Dell Technologies',
    level: 'Gold Partner',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: Dell_Platinum,
    category: 'Software'
  },
  {
    id: 4,
    name: 'IBM',
    level: 'Silver Partner',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: IBM,
    category: 'Software'
  },
  {
    id: 5,
    name: 'Vmware',
    level: 'Register Partner',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: VMware,
    category: 'Software'
  },
      {
    id: 6,
    name: 'A10',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: A10,
    category: 'Software'
  },
   {
    id: 7,
    name: 'Fortinet',
    level: 'Advocate',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: Fortinet,
    category: 'Software'
  },
    {
    id: 8,
    name: 'F5',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: f5,
    category: 'Software'
  },
  {
    id: 9,
    name: 'Checkpoint',
    level: 'Advance',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: Check_point,
    category: 'Software'
  },
     {
    id: 10,
    name: 'Vinchin',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Vinchin,
    category: 'Software'
  },
  {
    id: 11,
    name: 'Lenovo',
    level: 'Authorized',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: lenovo,
    category: 'Software'
  },
  {
    id: 12,
    name: 'Veeam',
    level: 'Reseller',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: veeam,
    category: 'Software'
  },
  {
    id: 13,
    name: 'Imperva',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: imperva,
    category: 'Software'
  },
   {
    id: 14,
    name: 'Trend Micro',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Trendmicro,
    category: 'Software'
  },
  {
    id: 15,
    name: 'Promox',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Promox,
    category: 'Software'
  },
  {
    id: 16,
    name: 'Seiko',
    level: 'Reseller',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: Seiko,
    category: 'Software'
  },
 
   {
    id: 17,
    name: 'Redhat',
    level: 'Ready',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: redhat,
    category: 'Software'
  },
    {
    id: 18,
    name: 'HP',
    level: 'T2 Solution Provider',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: Hewlett_Packard,
    category: 'Software'
  },
   {
    id: 19,
    name: 'Microsoft',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Microsoft,
    category: 'Software'
  },
  {
    id: 20,
    name: 'Arista',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Arista,
    category: 'Software'
  },
    {
    id: 21,
    name: 'Juniper',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Juniper,
    category: 'Software'
  },

    {
    id: 22,
    name: 'Veritas',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Veritas,
    category: 'Software'
  },
    
    {
    id: 23,
    name: 'Hillstone',
    level: 'Bronze',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    logo: Hillstone,
    category: 'Software'
  }, 
  {
    id: 24,
    name: 'Symantec',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Symantec,
    category: 'Software'
  },
  
  {
    id: 25,
    name: 'Splunk',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: splunk,
    category: 'Software'
  },
  {
    id: 26,
    name: 'Sophos',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: Sophos,
    category: 'Software'
  },
  {
    id: 27,
    name: 'Send Quick',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: sendQuick,
    category: 'Software'
  },
  
  {
    id: 28,
    name: 'Zimbra',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: zimbra,
    category: 'Software'
  },
  
  {
    id: 29,
    name: 'APC',
    level: '',
    description: 'Our highest level of partnership, representing the deepest technical expertise and business relationship.',
    color: '',
    logo: APC,
    category: 'Software'
  },




]


// const generatePartners = () => {
//   const partners = [];
//   const categories = ['Cloud', 'Software', 'Hardware', 'Security', 'Data'];
//   const levels = ['Gold', 'Silver', 'Bronze'];
  
//   for (let i = 1; i <= 20; i++) {
//     const category = categories[Math.floor(Math.random() * categories.length)];
//     const level = levels[Math.floor(Math.random() * levels.length)];
    
//     partners.push({
//       id: i,
//       name: name[i-1],
//       category,
//       level,
//       logo: logoMap[`Tech Partner ${i}`] || `https://via.placeholder.com/150?text=Partner${i}`,
//       description: `A leading provider of ${category.toLowerCase()} solutions for enterprise businesses.`
//     });
//   }
  
//   return partners;
// };

// const partners = generatePartners();

const PartnershipsPage: React.FC = () => {
  // const [selectedCategory, setSelectedCategory] = React.useState('All');
  // const [selectedLevel, setSelectedLevel] = React.useState('All');
  
  // const filteredPartners = partners.filter(partner => {
  //   const categoryMatch = selectedCategory === 'All' || partner.category === selectedCategory;
  //   const levelMatch = selectedLevel === 'All' || partner.level === selectedLevel;
  //   return categoryMatch && levelMatch;
  // });
  
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Technology Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            We've built strong relationships with leading technology providers to deliver 
            the best integration solutions for our clients.
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
      
      {/* Partnership benefits */}
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
              The Power of Partnership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We collaborate with industry-leading technology providers to deliver comprehensive, 
              best-in-class solutions for our clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrated Solutions</h3>
              <p className="text-gray-600">
                Our partnerships enable us to provide fully integrated, end-to-end solutions 
                that connect all your critical systems seamlessly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Certified Expertise</h3>
              <p className="text-gray-600">
                Our team holds advanced certifications from all our technology partners, 
                ensuring the highest level of implementation expertise.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Practices</h3>
              <p className="text-gray-600">
                Our close relationships with technology providers give us access to 
                industry best practices and implementation methodologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Partnership levels */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Partnership Levels
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We categorize our partnerships based on the depth of our collaboration 
              and technical expertise.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-lg border-2 ${level.color}`}
              >
                <h3 className="text-xl font-semibold mb-4">{level.title}</h3>
                <p className="mb-6">{level.description}</p>
                <ul className="space-y-3">
                  {[
                    'Deep technical expertise',
                    'Joint solution development',
                    'Preferred implementation partner',
                    'Advanced support access'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Partner directory */}
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
              Our Technology Partners
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Browse our extensive network of technology partners that help us deliver 
              exceptional integration solutions.
            </motion.p>
          </div>
          
          {/* Filter options */}
          {/* <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Category
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="Cloud">Cloud</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Security">Security</option>
                <option value="Data">Data</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="level-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Level
              </label>
              <select
                id="level-filter"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="All">All Levels</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
              </select>
            </div>
          </div> */}
          
          {/* Partners grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Partners.map((partner) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-white flex items-center justify-center p-4">
                <div className="w-40 h-30  flex items-center justify-center overflow-hidden">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-contain" />
                </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{partner.name}</h3>
                    {/* <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      partner.level === 'Gold' ? 'bg-amber-100 text-amber-800' :
                      partner.level === 'Silver' ? 'bg-gray-100 text-gray-800' :
                      'bg-orange-100 text-orange-800'
                    }`}> */}

                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${partner.color}`}>
                      {partner.level}
                    </span>
                  </div>
                  {/* <p className="text-sm text-gray-600 mb-4">{partner.description}</p> */}
                  <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {partner.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* {filteredPartners.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No partners found with the selected filters.</p>
            </div>
          )} */}
        </div>
      </section>
      
      {/* Become a partner */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Become a Technology Partner
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-blue-100 mb-8"
              >
                Join our ecosystem of leading technology providers and help deliver 
                innovative integration solutions to our clients.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-blue-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Partnership Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Access to our extensive client base',
                    'Joint marketing and co-selling opportunities',
                    'Technical collaboration and integration support',
                    'Preferred pricing and resources',
                    'Partnership growth opportunities'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;