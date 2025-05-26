import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  TrendingUp, 
  Award, 
  Users, 
  MapPin,
  Globe,
  CheckCircle
} from 'lucide-react';

const journeyMilestones = [
  {
    year: 2015,
    title: 'Foundation',
    description: 'OneCloud was founded with a mission to simplify system integration for businesses.',
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    achievements: [
      'Company founded by technology veterans',
      'First office opened in Tech City',
      'Initial team of 5 integration specialists'
    ]
  },
  {
    year: 2017,
    title: 'Growth Phase',
    description: 'Expanded service offerings and client base significantly.',
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    achievements: [
      'Reached 50+ enterprise clients',
      'Expanded team to 25 professionals',
      'Launched specialized cloud integration services'
    ]
  },
  {
    year: 2019,
    title: 'Industry Recognition',
    description: 'Received first major industry award for integration excellence.',
    icon: <Award className="w-6 h-6 text-blue-600" />,
    achievements: [
      'Named "Top System Integrator" by Tech Excellence Awards',
      'Established partnerships with 10 major technology providers',
      'Expanded to second office location'
    ]
  },
  {
    year: 2021,
    title: 'International Expansion',
    description: 'Began serving clients internationally and opened new regional offices.',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    achievements: [
      'Expanded operations to 8 countries',
      'Implemented first multi-national integration project',
      'Grew to 100+ team members worldwide'
    ]
  },
  {
    year: 2023,
    title: 'Innovation Leader',
    description: 'Launched proprietary integration platform and advanced AI capabilities.',
    icon: <Users className="w-6 h-6 text-blue-600" />,
    achievements: [
      'Released OneCloud Integration Platform',
      'Introduced AI-powered system optimization',
      'Reached 200+ active enterprise clients'
    ]
  },
  {
    year: 2025,
    title: 'Future Vision',
    description: 'Continuing to expand our global footprint and technological capabilities.',
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    achievements: [
      'Planning expansion to 15+ countries',
      'Developing next-gen integration technologies',
      'Targeting 500+ enterprise partnerships'
    ]
  }
];

const JourneyPage: React.FC = () => {
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
            Our Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            From our humble beginnings to becoming a leader in system integration, 
            discover the key milestones that shaped our company.
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
      
      {/* Our story introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The OneCloud Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our journey began in 2015 when a group of technology enthusiasts with expertise in 
                  system integration recognized a growing challenge in the business world: the proliferation 
                  of disconnected systems and applications that were hindering efficiency and growth.
                </p>
                <p>
                  With a vision to simplify integration and help businesses connect their critical systems, 
                  OneCloud was born. Starting with a small team in a modest office, we embarked on a mission 
                  to become the leading system integration provider in the industry.
                </p>
                <p>
                  Over the years, we've experienced tremendous growth, expanded our services, and built 
                  partnerships with leading technology providers. Today, we're proud to serve clients 
                  across the globe, helping them achieve seamless integration and operational excellence.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="OneCloud journey"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline section */}
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
              Our Growth Timeline
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Explore the key milestones and achievements that have shaped our journey 
              from startup to industry leader.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Year marker (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 text-white font-bold items-center justify-center z-10">
                    {milestone.year}
                  </div>
                  
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {/* Year marker (mobile) */}
                    <div className="md:hidden w-12 h-12 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mb-4">
                      {milestone.year}
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 rounded-full mr-3">
                          {milestone.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Growth in numbers */}
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
              Our Growth in Numbers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              The metrics that demonstrate our journey of growth and success.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Enterprise Clients', color: 'from-blue-400 to-blue-600' },
              { value: '150+', label: 'Team Members', color: 'from-green-400 to-green-600' },
              { value: '15+', label: 'Countries Served', color: 'from-purple-400 to-purple-600' },
              { value: '300%', label: 'Revenue Growth', color: 'from-amber-400 to-amber-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r p-[1px] rounded-lg"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              >
                <div className="bg-white h-full p-8 rounded-lg">
                  <p className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global presence */}
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
              Our Global Presence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              From our humble beginnings to our current international footprint.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-lg shadow-lg p-4 md:p-8 overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              {/* World map with location markers would go here */}
              <div className="bg-blue-50 rounded-lg w-full h-[400px] flex items-center justify-center">
                <p className="text-gray-500">Interactive World Map with Office Locations</p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { region: 'North America', offices: ['New York', 'San Francisco', 'Toronto'] },
                { region: 'Europe', offices: ['London', 'Berlin', 'Paris'] },
                { region: 'Asia Pacific', offices: ['Singapore', 'Tokyo', 'Sydney'] }
              ].map((region, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{region.region}</h3>
                  <ul className="space-y-2">
                    {region.offices.map((office, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {office}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Looking forward */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking to the Future</h2>
              <p className="text-xl text-blue-100 mb-8">
                As we continue our journey, we remain committed to innovation, excellence, 
                and helping our clients achieve seamless system integration.
              </p>
              <div className="space-y-4">
                {[
                  'Expanding our global footprint to new regions',
                  'Investing in cutting-edge integration technologies',
                  'Building stronger partnerships with technology leaders',
                  'Developing our team of integration experts'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="OneCloud future vision"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-900/60 mix-blend-multiply"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyPage;