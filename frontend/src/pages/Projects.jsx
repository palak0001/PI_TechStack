import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Badge, Modal } from '../components/Common.jsx';
import { projectsData } from '../data/content.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const Projects = () => {
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const screenshots = selectedProject ? (selectedProject.screenshots || []) : [];
  const firstTwo = screenshots.slice(0, 2);
  const restScreens = screenshots.slice(2);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-beige-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-custom text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our latest and greatest work across various industries
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-beige-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-beige-100 text-gray-700 hover:bg-beige-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>

                  <div className="mb-4">
                    <Badge variant="primary">{project.category}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 mb-4">{project.shortDesc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="beige">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => { setSelectedProject(project); setIsModalOpen(true); }}
                    className="text-blue-600 font-bold hover:text-blue-700 transition-smooth inline-flex items-center gap-2"
                  >
                    View Project →
                  </motion.button>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {selectedProject && (
            <Modal
              isOpen={isModalOpen}
              onClose={() => { setIsModalOpen(false); setSelectedProject(null); }}
              title={selectedProject.name}
            >
              <div className="space-y-4">
                <p className="text-gray-700">{selectedProject.shortDesc}</p>

                {/* Show first two screenshots prominently */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {firstTwo.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      onClick={() => setLightboxSrc(src)}
                      alt={`${selectedProject.name} screenshot ${i+1}`}
                      className="w-full h-56 md:h-64 object-cover rounded-md cursor-pointer"
                    />
                  ))}
                </div>

                {/* Remaining screenshots as smaller thumbnails */}
                {restScreens.length > 0 && (
                  <div>
                    <h4 className="text-sm text-gray-500 mb-2">More screenshots</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {restScreens.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          onClick={() => setLightboxSrc(src)}
                          alt={`${selectedProject.name} extra screenshot ${i+1}`}
                          className="w-full h-32 object-cover rounded-md cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.technologies.map((t) => (
                    <Badge key={t} variant="beige">{t}</Badge>
                  ))}
                </div>
                {/* Removed 'Visit Project' link per request */}
              </div>
            </Modal>
          )}

          {lightboxSrc && (
            <Modal isOpen={true} onClose={() => setLightboxSrc(null)} title={null}>
              <div className="flex justify-center p-4">
                <img src={lightboxSrc} alt="Large screenshot" className="max-h-[80vh] w-auto object-contain rounded-md" />
              </div>
            </Modal>
          )}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. We'd love to discuss your ideas and bring them to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-smooth"
          >
            Start Your Project
          </a>
        </motion.div>
      </section>
    </div>
  );
};
