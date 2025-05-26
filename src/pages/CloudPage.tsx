import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Shield, 
  BarChart, 
  Monitor, 
  Check,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle,
  Gift
} from 'lucide-react';

const CloudPage: React.FC = () => {
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
            1Cloud NG
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Our next-generation cloud integration platform that simplifies 
            and accelerates your digital transformation journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Request a Demo
            </Link>
          </motion.div>
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
      
      {/* Product overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                The Ultimate Integration Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                1Cloud NG is our flagship cloud-based integration platform designed to 
                connect your critical business systems, applications, and data sources with ease.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Built on cutting-edge technology and years of integration expertise, 1Cloud NG 
                provides a comprehensive suite of tools to streamline your operations, enhance 
                data flow, and drive digital transformation.
              </p>
              
              <div className="space-y-4">
                {[
                  'Connect any system, any data source, anywhere',
                  'Pre-built connectors for popular business applications',
                  'Intuitive no-code/low-code interface',
                  'Real-time data synchronization and monitoring',
                  'Enterprise-grade security and compliance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-500">1Cloud NG Dashboard Preview</p>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { icon: <Monitor className="w-6 h-6 text-blue-600" />, label: 'Dashboard' },
                    { icon: <Server className="w-6 h-6 text-blue-600" />, label: 'Connections' },
                    { icon: <BarChart className="w-6 h-6 text-blue-600" />, label: 'Analytics' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-md text-center shadow-sm">
                      <div className="mx-auto w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mb-2">
                        {item.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-700">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating features */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-full mr-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">Fast Integration</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-full mr-3">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">Secure Data</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key features */}
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
              Key Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover what makes 1Cloud NG the preferred integration platform for businesses worldwide.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud className="w-12 h-12 text-blue-600" />,
                title: 'Universal Connectivity',
                description: 'Connect to virtually any system, application, or data source with our extensive library of pre-built connectors and custom integration options.'
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: 'Lightning-Fast Deployment',
                description: 'Implement integrations in days, not months, with our intuitive interface and streamlined deployment process.'
              },
              {
                icon: <Monitor className="w-12 h-12 text-blue-600" />,
                title: 'Real-Time Monitoring',
                description: 'Track the performance and status of your integrations with comprehensive dashboards and alerts.'
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: 'Enterprise-Grade Security',
                description: 'Protect your sensitive data with advanced encryption, access controls, and compliance features.'
              },
              {
                icon: <BarChart className="w-12 h-12 text-blue-600" />,
                title: 'Advanced Analytics',
                description: 'Gain valuable insights from your integrated data with powerful reporting and analytics capabilities.'
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-600" />,
                title: 'Automated Workflows',
                description: 'Create sophisticated automated processes across systems with our visual workflow designer.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md h-full"
              >
                <div className="p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it works */}
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
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              1Cloud NG simplifies the integration process with an intuitive approach.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-blue-200"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Connect',
                  description: 'Link your systems and applications using our pre-built connectors or custom APIs.'
                },
                {
                  title: 'Configure',
                  description: 'Define data mappings, transformations, and workflows using our visual designer.'
                },
                {
                  title: 'Activate',
                  description: 'Deploy your integrations with a single click and monitor their performance.'
                },
                {
                  title: 'Optimize',
                  description: 'Analyze and improve your integrations with insights and recommendations.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="relative z-10">
                    <div className="bg-white border-2 border-blue-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-blue-600">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              See 1Cloud NG in Action
            </Link>
          </div>
        </div>
      </section>
      
      {/* Pricing plans */}
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
              Flexible Pricing Plans
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Choose the right plan for your business needs and scale as you grow.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$499',
                period: 'per month',
                description: 'Perfect for small businesses getting started with integration.',
                features: [
                  'Up to 5 integration connections',
                  'Basic monitoring and alerts',
                  'Standard support',
                  'Weekly data synchronization',
                  '5GB data transfer per month'
                ],
                highlight: false,
                buttonText: 'Get Started'
              },
              {
                name: 'Professional',
                price: '$999',
                period: 'per month',
                description: 'Ideal for growing businesses with more complex integration needs.',
                features: [
                  'Up to 20 integration connections',
                  'Advanced monitoring and alerts',
                  'Priority support',
                  'Daily data synchronization',
                  '50GB data transfer per month',
                  'Custom workflow automation'
                ],
                highlight: true,
                buttonText: 'Choose Professional'
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'Tailored solutions for large organizations with advanced requirements.',
                features: [
                  'Unlimited integration connections',
                  'Comprehensive monitoring and analytics',
                  '24/7 premium support',
                  'Real-time data synchronization',
                  'Unlimited data transfer',
                  'Advanced security features',
                  'Dedicated integration specialist'
                ],
                highlight: false,
                buttonText: 'Contact Sales'
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg overflow-hidden shadow-md ${
                  plan.highlight ? 'ring-2 ring-blue-500 shadow-lg transform scale-105 md:scale-110 z-10' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium ${
                      plan.highlight 
                        ? 'text-white bg-blue-600 hover:bg-blue-700'
                        : 'text-blue-700 bg-blue-100 hover:bg-blue-200'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">All plans include a 14-day free trial. No credit card required.</p>
            <Link
              to="/contact"
              className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
            >
              Need a custom plan? Contact us <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
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
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Hear from businesses that have transformed their operations with 1Cloud NG.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "1Cloud NG has revolutionized how we manage our data across multiple systems. The implementation was smooth, and we saw results within weeks.",
                author: "Sarah Johnson",
                position: "CIO, Global Retail Inc.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The automation capabilities of 1Cloud NG have saved us countless hours of manual work. Our team can now focus on strategic initiatives instead of data entry.",
                author: "Michael Chen",
                position: "IT Director, FinTech Solutions",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "We evaluated several integration platforms before choosing 1Cloud NG. Its combination of ease of use and powerful features made it the clear winner.",
                author: "Alicia Rodriguez",
                position: "VP of Operations, TechSmart",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Find answers to common questions about 1Cloud NG.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to implement 1Cloud NG?",
                answer: "Most businesses can be up and running with their first integrations within days. The exact timeline depends on the complexity of your systems and integration requirements. Our team provides comprehensive onboarding support to ensure a smooth implementation process."
              },
              {
                question: "Can 1Cloud NG integrate with my legacy systems?",
                answer: "Yes! 1Cloud NG is designed to work with both modern and legacy systems. We offer custom connectors and API options to ensure compatibility with virtually any system, regardless of age or technology stack."
              },
              {
                question: "Is my data secure with 1Cloud NG?",
                answer: "Absolutely. Security is our top priority. 1Cloud NG employs enterprise-grade encryption, strict access controls, and complies with major security standards including SOC 2, GDPR, and HIPAA. Your data is protected both in transit and at rest."
              },
              {
                question: "What kind of support is included?",
                answer: "All plans include access to our support team. The level of support varies by plan, with higher tiers offering faster response times and dedicated support resources. We also provide extensive documentation, tutorials, and a knowledge base for self-service support."
              },
              {
                question: "Can I upgrade my plan as my business grows?",
                answer: "Yes, you can easily upgrade your plan at any time as your integration needs evolve. We designed our pricing structure to scale with your business, ensuring you only pay for what you need when you need it."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Have more questions? We're here to help.</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="mb-8 inline-block">
              <div className="p-3 bg-white/20 rounded-full">
                <Gift className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the power of 1Cloud NG with a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white rounded-md shadow-sm text-lg font-medium text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudPage;