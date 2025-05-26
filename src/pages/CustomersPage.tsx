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

// Generate sample customer data
const generateCustomers = () => {
  const industries = ['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology'];
  const customers = [];
  
  for (let i = 1; i <= 10; i++) {
    const industry = industries[Math.floor(Math.random() * industries.length)];
    customers.push({
      id: i,
      name: `Customer ${i}`,
      industry,
      logo: `https://via.placeholder.com/150?text=Logo${i}`,
      description: `A leading ${industry.toLowerCase()} company that has transformed their operations with our integration solutions.`,
      solution: Math.random() > 0.5 ? 'System Integration' : 'Cloud Solutions',
      results: [
        'Reduced operational costs by 30%',
        'Improved data accuracy by 95%',
        'Accelerated business processes by 40%'
      ]
    });
  }
  
  return customers;
};

const customers = generateCustomers();

const CustomersPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState('All');
  
  const filteredCustomers = customers.filter(customer => {
    const industryMatch = selectedIndustry === 'All' || customer.industry === selectedIndustry;
    const solutionMatch = selectedSolution === 'All' || customer.solution === selectedSolution;
    return industryMatch && solutionMatch;
  });
  
  const uniqueIndustries = ['All', ...new Set(customers.map(c => c.industry))];
  const uniqueSolutions = ['All', ...new Set(customers.map(c => c.solution))];
  
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
          <div className="text-center mb-16">
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
          
          {/* Filter options */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div>
              <label htmlFor="industry-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Industry
              </label>
              <select
                id="industry-filter"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {uniqueIndustries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="solution-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Solution
              </label>
              <select
                id="solution-filter"
                value={selectedSolution}
                onChange={(e) => setSelectedSolution(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {uniqueSolutions.map((solution) => (
                  <option key={solution} value={solution}>{solution}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Customers grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCustomers.map((customer) => (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-50 flex items-center justify-center p-4 border-b border-gray-200">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">Logo {customer.id}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{customer.name}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                      {customer.industry}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{customer.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Solution Implemented:</h4>
                    <span className="inline-block text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                      {customer.solution}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {customer.results.map((result, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/projects`}
                      className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                    >
                      Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCustomers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No customers found with the selected filters.</p>
            </div>
          )}
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