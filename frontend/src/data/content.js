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
        image: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    link: '#',
    screenshots: [
      'https://cdn.dribbble.com/userupload/14566366/file/original-36d2e038f1be3028d74cc870e69abc68.png?resize=1600x1200&vertical=center',
      'https://cdn.dribbble.com/userupload/42549517/file/original-0ac92b771b8ded6724134a04f2e9a49d.png?resize=1600x1200&vertical=center'
    ]
  },
  {
    id: 2,
    name: 'SaaS Dashboard',
    category: 'Web Development',
    shortDesc: 'Analytics and management dashboard for businesses',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
    screenshots: [
      'https://zdblogs.zohowebstatic.com/sites/analytics/insightshq/files/website_performance_dashboard.png',
      'https://zdblogs.zohowebstatic.com/sites/analytics/insightshq/files/ecommerce_dashboard.png'
    ]
  },
  {
    id: 3,
    name: 'Mobile Banking App',
    category: 'UI/UX Design',
    shortDesc: 'Intuitive mobile app for financial transactions',
    image: 'https://media.istockphoto.com/id/1414580827/vector/credit-card-security-in-mobile.webp?a=1&b=1&s=612x612&w=0&k=20&c=EUFK3Ck5ql5ipHOX3UI00EmEI5NltQJPabPytniwuYM=',
    technologies: ['Figma', 'React Native'],
    link: '#',
    screenshots: [
      'https://www.shutterstock.com/image-vector/sophisticated-bank-app-interface-design-260nw-2459381855.jpg',
      'https://cdn.dribbble.com/userupload/4931360/file/original-3a6eeca1031b86658bf42557e7909e89.jpg?resize=%7Bwidth%7Dx%7Bheight%7D&vertical=center'
    ]
  },
  {
    id: 4,
    name: 'Health & Fitness Platform',
    category: 'Web Development',
    shortDesc: 'Comprehensive fitness tracking and coaching platform',
    image: 'https://images.unsplash.com/vector-1738590592306-6580737c57dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwJTI2JTIwZml0bmVzcyUyMGlsbHVzdHJhdGlvbnN8ZW58MHx8MHx8fDA%3D',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
    link: '#',
    screenshots: [
      'https://cdn.dribbble.com/userupload/20026415/file/original-f11a5e42a4994cdba0934946f4e4966e.png?resize=1504x1128&vertical=center',
      'https://s3-alpha.figma.com/hub/file/2664562462/eb323faa-a96d-46ab-89e4-1a1874048c95-cover.png'
    ]
  },
  {
    id: 5,
    name: 'Brand Identity Suite',
    category: 'Logo Design',
    shortDesc: 'Complete visual identity for tech startup',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    technologies: ['Illustrator', 'Design System'],
    link: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1649000809102-61d0fe6759b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJhbmQlMjBJZGVudGl0eSUyMFN1aXRlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
      'https://www.clinkitsolutions.com/wp-content/uploads/2023/07/Blog_Jul5_15-Key-Elements-of-a-Strong-Brand-Identity.jpg'
    ]
  },
  {
    id: 6,
    name: 'Social Media Platform',
    category: 'Web Development',
    shortDesc: 'Community-driven social network',
    image: 'https://plus.unsplash.com/premium_vector-1724157909853-b0d29c620586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U29jaWFsJTIwTWVkaWF8ZW58MHx8MHx8fDA%3D',
    technologies: ['React', 'GraphQL', 'PostgreSQL'],
    link: '#',
    screenshots: [
      'https://cdn.dribbble.com/users/4030027/screenshots/19299823/media/b929e973307b6246352bda9fe0cfd64f.png?resize=400x300&vertical=center',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/25c519125072615.6111a9085c702.png'
    ]
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
    message: 'PI TechStack transformed our online presence. Their expertise and dedication resulted in a website that exceeded our expectations. Highly professional team.'
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
