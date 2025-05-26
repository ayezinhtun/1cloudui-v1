import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Bot, 
  Monitor, 
  Code,
  Workflow,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Connect your disparate systems, applications, and data sources to create a unified ecosystem.',
    icon: <Server className="w-12 h-12 text-blue-600" />,
    benefits: [
      'Eliminate data silos and duplicate information',
      'Automate data flow between systems',
      'Improve operational efficiency',
      'Enable real-time data access across applications'
    ],
    features: [
      'API-based integration',
      'Middleware implementation',
      'ETL (Extract, Transform, Load) processes',
      'Custom connectors for legacy systems'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing to enhance flexibility, scalability, and performance.',
    icon: <Cloud className="w-12 h-12 text-blue-600" />,
    benefits: [
      'Reduce IT infrastructure costs',
      'Scale resources based on demand',
      'Improve business continuity and disaster recovery',
      'Enable remote work capabilities'
    ],
    features: [
      'Cloud migration strategy and implementation',
      'Multi-cloud and hybrid cloud solutions',
      'Cloud security and compliance',
      'Cloud optimization and cost management'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your critical systems and data with comprehensive security solutions.',
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    benefits: [
      'Safeguard sensitive business and customer data',
      'Maintain regulatory compliance',
      'Prevent costly data breaches',
      'Build customer trust through strong security'
    ],
    features: [
      'Security assessment and penetration testing',
      'Identity and access management',
      'Threat detection and response',
      'Security awareness training'
    ]
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description: 'Optimize how your organization stores, organizes, and utilizes data for maximum value.',
    icon: <Database className="w-12 h-12 text-blue-600" />,
    benefits: [
      'Make better business decisions with reliable data',
      'Improve data quality and consistency',
      'Enhance regulatory compliance',
      'Increase operational efficiency'
    ],
    features: [
      'Data governance frameworks',
      'Data quality management',
      'Master data management',
      'Data lifecycle management'
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI & Automation',
    description: 'Implement artificial intelligence and automation to transform your business processes.',
    icon: <Bot className="w-12 h-12 text-blue-600" />,
    benefits: [
      'Automate repetitive tasks and workflows',
      'Gain insights from predictive analytics',
      'Enhance customer experience with AI',
      'Optimize resource allocation'
    ],
    features: [
      'Process automation solutions',
      'Machine learning implementation',
      'AI-powered analytics',
      'Chatbots and virtual assistants'
    ]
  },
  {
    id: 'managed-services',
    title: 'Managed IT Services',
    description: 'Let our experts handle your IT operations so you can focus on your core business.',
    icon: <Monitor className="w-12 h-12 text-blue-600" />,
    benefits: [
      'Reduce operational IT costs',
      'Access to specialized expertise',
      'Improve system reliability and uptime',
      'Focus resources on strategic initiatives'
    ],
    features: [
      '24/7 monitoring and support',
      'Proactive maintenance and updates',
      'Incident response and resolution',
      'Regular performance reporting'
    ]
  }
];

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  
  const selectedServiceData = selectedService 
    ? services.find(s => s.id === selectedService)
    : null;
  
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Comprehensive system integration solutions tailored to your business needs.
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
      
      {/* Services overview */}
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
              How We Can Help You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We offer a comprehensive range of system integration and technology services 
              to help your business operate more efficiently and effectively.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all border-2 ${
                  selectedService === service.id 
                    ? 'border-blue-500' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button 
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service.id);
                  }}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected service details */}
      {selectedServiceData && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 px-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-white/20 rounded-full mr-6">
                    {selectedServiceData.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{selectedServiceData.title}</h3>
                </div>
                <p className="text-xl text-blue-100 max-w-2xl">
                  {selectedServiceData.description}
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {selectedServiceData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Features</h4>
                    <ul className="space-y-3">
                      {selectedServiceData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Discuss Your {selectedServiceData.title} Needs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
      
      {/* Our approach */}
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
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We follow a structured methodology to ensure successful system integration projects.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Process steps */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Code className="w-6 h-6 text-blue-600" />,
                  title: 'Discovery & Analysis',
                  description: 'We thoroughly assess your current systems, requirements, and objectives to develop a clear roadmap.'
                },
                {
                  icon: <Workflow className="w-6 h-6 text-blue-600" />,
                  title: 'Solution Design',
                  description: 'Our experts design a tailored integration solution that aligns with your business goals.'
                },
                {
                  icon: <Server className="w-6 h-6 text-blue-600" />,
                  title: 'Implementation',
                  description: 'We execute the integration plan with precision, ensuring minimal disruption to your operations.'
                },
                {
                  icon: <Monitor className="w-6 h-6 text-blue-600" />,
                  title: 'Testing & Optimization',
                  description: 'Rigorous testing and continuous optimization ensure your systems work flawlessly together.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className="relative z-10">
                    <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-blue-600 border-2 border-blue-200">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case studies teaser */}
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
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              See how our services have helped businesses achieve their integration goals.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Healthcare Provider',
                service: 'System Integration',
                result: '60% reduction in data processing time',
                image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Financial Services Firm',
                service: 'Cloud Solutions',
                result: '40% decrease in IT infrastructure costs',
                image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Manufacturing Company',
                service: 'AI & Automation',
                result: '35% increase in operational efficiency',
                image: 'https://images.pexels.com/photos/4480993/pexels-photo-4480993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseStudy.title}</h3>
                  <p className="text-blue-600 mb-3">{caseStudy.service}</p>
                  <p className="text-gray-600 mb-4">
                    <strong>Result:</strong> {caseStudy.result}
                  </p>
                  <Link
                    to="/projects"
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                  >
                    Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              View All Case Studies
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
            Ready to Streamline Your Systems?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss how our integration services can 
            transform your business operations.
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

export default ServicesPage;