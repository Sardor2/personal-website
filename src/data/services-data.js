import {FiCode,FiSearch} from 'react-icons/fi';
import {FaMobileAlt} from 'react-icons/fa';
import {DiAppstore} from 'react-icons/di';

export const ServicesData = [
  {
    title: 'Web Development',
    description:'If you are a start-up that seeks a website,I can make you a fully-functional website in no time.',
    icon: <FiCode />
  },
  {
    title: 'Web Design',
    description:'I work with a designer friend of mine,He is an expert UI/UX designer who can design a website for you',
    icon: <DiAppstore />
  },
  {
    title: 'Responsive Development',
    description:'I develop responsive websites that can work well in different screen sizes',
    icon: <FaMobileAlt />
  },
  {
    title:'SEO',
    description: 'Having a website appear on the fron lines of Google Searches is crucial to your business.',
    icon: <FiSearch />
  }
]