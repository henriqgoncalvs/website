const timeline: {
  size: 'main' | 'minimized';
  variant?: 'school' | 'work';
  image?: string;
  date: string;
  title: string;
  description?: string;
  tags?: string[];
}[] = [
  {
    size: 'minimized',
    date: '2022',
    title:
      'Started my degree in Software Engineer at UNICESUMAR 🎓',
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/pagbank.jpg',
    date: 'JAN 2022 - PRESENT',
    title: 'Working at PagBank 🪙',
    description:
      'As a Front end Engineer, I work at the PagBank project, a digital bank for the PagSeguro ecosystem. It is a great opportunity to work with a product that is scalable and uses many advanced concepts of architecture.',
    tags: ['React', 'Redux', 'Storybook', 'Microfrontend'],
  },
  {
    size: 'minimized',
    date: '2020',
    title:
      'Interrupted my Computer Engineer degree to focus on my career',
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/loomi.jpg',
    date: 'SEP 2020 - JAN 2022',
    title: 'Worked at Loomi 🚀',
    description:
      'As a Front end Engineer and Tech Lead, I worked at more than 15 projects for national and international clients. It was a great experience to work with a team of talented people and to learn a lot about the software development process.',
    tags: ['React', 'TypeScript', 'Next.js', 'Redux', 'Zustand'],
  },
  {
    size: 'minimized',
    date: 'JUN 2018',
    title: 'Moved to Recife 🇧🇷',
  },
  {
    size: 'minimized',
    date: 'JUN 2018',
    title: 'Got my first job as a UI Designer 🎨',
  },
  {
    size: 'main',
    variant: 'school',
    image: '/images/timeline/univasf.png',
    date: 'SEP 2016',
    title: 'Started my Computer Engineer degree 🎓',
    description:
      'Studied at the Federal University of Vale do São Francisco (UFSC) in Petrolina 🇧🇷',
    tags: [
      'C',
      'Java',
      'Algorithms',
      'Data Structures',
      'Software Engineer',
      'Object Oriented Programming',
    ],
  },
  {
    size: 'minimized',
    date: '2011',
    title: 'Got my first drum set 🥁',
  },
  {
    size: 'minimized',
    date: '2006',
    title: 'My dad gave me my first computer 🖥️',
  },
  {
    size: 'minimized',
    date: 'MAR 1999',
    title: 'Little Henrique was born 🐣',
  },
];

export default timeline;
