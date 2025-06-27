import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  ChevronRight, 
  Building, 
  CheckCircle,
  Database,
  Server,
  Cloud,
  Shield,
  Filter
} from 'lucide-react';

// Generate sample project data
const generateProjects = () => {
  const industries = ['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology'];
  const services = ['System Integration', 'Cloud Solutions', 'Data Management', 'Cybersecurity'];
  const images = [
    'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  
  const projects = [];
  
  for (let i = 1; i <= 9; i++) {
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const service = services[Math.floor(Math.random() * services.length)];
    const image = images[Math.floor(Math.random() * images.length)];
    
    projects.push({
      id: i,
      title: `${industry} Integration Project ${i}`,
      client: `Client ${i}`,
      industry,
      service,
      image,
      excerpt: `A comprehensive ${service.toLowerCase()} solution for a leading ${industry.toLowerCase()} company.`,
      challenges: [
        'Disconnected legacy systems',
        'Manual data entry causing errors',
        'Slow response times affecting customer service'
      ],
      solutions: [
        `Implemented custom ${service} solution`,
        'Automated data synchronization between systems',
        'Deployed real-time monitoring and alerts'
      ],
      results: [
        'Reduced operational costs by 30%',
        'Improved data accuracy by 95%',
        'Accelerated business processes by 40%'
      ],
      duration: `${3 + Math.floor(Math.random() * 9)} months`,
      date: `202${Math.floor(Math.random() * 3) + 1}`
    });
  }
  
  return projects;
};

const projects = generateProjects();

const ProjectsPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const uniqueIndustries = ['All', ...new Set(projects.map(p => p.industry))];
  const uniqueServices = ['All', ...new Set(projects.map(p => p.service))];
  
  const filteredProjects = projects.filter(project => {
    const industryMatch = selectedIndustry === 'All' || project.industry === selectedIndustry;
    const serviceMatch = selectedService === 'All' || project.service === selectedService;
    return industryMatch && serviceMatch;
  });
  
  const selectedProjectData = selectedProject 
    ? projects.find(p => p.id === selectedProject)
    : null;
  
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Explore our portfolio of successful integration projects and case studies.
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
      
      {/* Filter and projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter options */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Filter Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="service-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Service
                </label>
                <select
                  id="service-filter"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {uniqueServices.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <Building className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600 text-sm mr-4">{project.client}</span>
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600 text-sm">{project.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                      {project.industry}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                      {project.service}
                    </span>
                  </div>
                  <button 
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Case Study <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No projects found with the selected filters.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project details modal */}
      {selectedProjectData && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="project-modal" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
            >
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedProjectData.title}</h3>
                    <div className="flex items-center text-white opacity-90">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="mr-4">{selectedProjectData.client}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{selectedProjectData.duration}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    {selectedProjectData.industry}
                  </span>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
                    {selectedProjectData.service}
                  </span>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Overview</h4>
                  <p className="text-gray-600">{selectedProjectData.excerpt}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-red-100 rounded-full mr-3">
                        <Server className="w-5 h-5 text-red-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Challenges</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedProjectData.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 rounded-full mr-3">
                        <Database className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Solutions</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedProjectData.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-green-100 rounded-full mr-3">
                        <Cloud className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Results</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedProjectData.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Completed: {selectedProjectData.date}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Discuss Similar Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      
      {/* Services section */}
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
              Our Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover the range of integration services that helped our clients succeed.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Server className="w-8 h-8 text-blue-600" />,
                title: 'System Integration',
                description: 'Connect disparate systems, applications, and data sources to create a unified ecosystem.'
              },
              {
                icon: <Cloud className="w-8 h-8 text-blue-600" />,
                title: 'Cloud Solutions',
                description: 'Leverage cloud technologies to enhance flexibility, scalability, and performance.'
              },
              {
                icon: <Database className="w-8 h-8 text-blue-600" />,
                title: 'Data Management',
                description: 'Optimize how your organization stores, organizes, and utilizes data for maximum value.'
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: 'Cybersecurity',
                description: 'Protect your critical systems and data with comprehensive security solutions.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss your integration challenges and discover how 
            we can help your business thrive.
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
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;