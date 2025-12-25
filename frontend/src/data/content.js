import healthImg from '../assets/health.svg';

export const servicesData = [
  {
    id: 1,
    name: 'Website Development',
    shortDesc: 'Build responsive, fast, and scalable websites',
    description: 'We create modern, responsive websites that convert visitors into customers. Using latest technologies and best practices.',
    icon: '🌐',
    tools: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Mobile-first responsive design',
      'Fast loading times (90+ Lighthouse)',
      'SEO optimized',
      'Secure & scalable architecture',
      'Regular maintenance & updates'
    ],
    projects: [
      {
        name: 'E-Commerce Platform',
        image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db96?w=500&h=300&fit=crop',
        tech: ['React', 'Node.js', 'MongoDB']
      },
      {
        name: 'SaaS Dashboard',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL']
      }
    ]
  },
  {
    id: 2,
    name: 'UI/UX Designing',
    shortDesc: 'Create beautiful and intuitive user experiences',
    description: 'We design interfaces that are beautiful, intuitive, and user-centric. Every pixel is crafted with purpose.',
    icon: '🎨',
    tools: ['Figma', 'Adobe XD', 'Protopie', 'Sketch', 'Design Systems'],
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Interactive mockups',
      'Design systems & components',
      'Accessibility compliance (WCAG)'
    ],
    projects: [
      {
        name: 'Banking App Interface',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
        tech: ['Figma', 'Protopie']
      },
      {
        name: 'Health & Fitness Platform',
        image: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=500&h=300&fit=crop',
        tech: ['Adobe XD', 'Design System']
      }
    ]
  },
  {
    id: 3,
    name: 'Logo Design',
    shortDesc: 'Unique brand identity through exceptional logo design',
    description: 'We create memorable logos that represent your brand\'s essence and values. Timeless designs that stand the test of time.',
    icon: '✨',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Procreate', 'CorelDRAW'],
    features: [
      'Brand strategy consultation',
      'Multiple design concepts',
      'Unlimited revisions',
      'Vector & raster formats',
      'Brand guidelines document'
    ],
    projects: [
      {
        name: 'Tech Startup Logo',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
        tech: ['Illustrator']
      },
      {
        name: 'Fashion Brand Identity',
        image: 'https://images.unsplash.com/photo-1578926078328-123456789?w=500&h=300&fit=crop',
        tech: ['Illustrator', 'Photoshop']
      }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    category: 'Web Development',
    shortDesc: 'Full-stack e-commerce solution with payment integration',
    image: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    name: 'SaaS Dashboard',
    category: 'Web Development',
    shortDesc: 'Analytics and management dashboard for businesses',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    name: 'Mobile Banking App',
    category: 'UI/UX Design',
    shortDesc: 'Intuitive mobile app for financial transactions',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    technologies: ['Figma', 'React Native'],
    link: '#'
  },
  {
    id: 4,
    name: 'Health & Fitness Platform',
    category: 'Web Development',
    shortDesc: 'Comprehensive fitness tracking and coaching platform',
    image: 'https://images.unsplash.com/vector-1738590592306-6580737c57dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwJTI2JTIwZml0bmVzcyUyMGlsbHVzdHJhdGlvbnN8ZW58MHx8MHx8fDA%3D',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
    link: '#'
  },
  {
    id: 5,
    name: 'Brand Identity Suite',
    category: 'Logo Design',
    shortDesc: 'Complete visual identity for tech startup',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    technologies: ['Illustrator', 'Design System'],
    link: '#'
  },
  {
    id: 6,
    name: 'Social Media Platform',
    category: 'Web Development',
    shortDesc: 'Community-driven social network',
    image: 'https://plus.unsplash.com/premium_vector-1724157909853-b0d29c620586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U29jaWFsJTIwTWVkaWF8ZW58MHx8MHx8fDA%3D',
    technologies: ['React', 'GraphQL', 'PostgreSQL'],
    link: '#'
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder',
    company: 'TechStart Co.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    message: 'PI TechStack transformed our online presence. Their expertise and dedication resulted in a website that exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Digital Innovations Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    message: 'Working with this team was an absolute pleasure. They understood our vision and brought it to life beautifully. Highly recommended!'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Brand Solutions LLC',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    message: 'The UI/UX design work was outstanding. Our conversion rates increased by 45% after implementing their designs. Best investment ever!'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Product Manager',
    company: 'FinTech Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    message: 'Exceptional attention to detail and professional communication throughout the project. The final product was delivered on time and within budget.'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Business Owner',
    company: 'Creative Agency Plus',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    message: 'PI TechStack is not just a vendor, they are partners in our success. Their innovative approach helped us stay ahead of competitors.'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Startup Founder',
    company: 'NextGen Tech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    message: 'From concept to launch, the entire process was smooth and professional. Our website now generates 3x more leads than before.'
  }
];
