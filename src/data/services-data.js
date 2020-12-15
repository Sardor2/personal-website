import {FiCode,FiSearch} from 'react-icons/fi';
import {FaMobileAlt} from 'react-icons/fa';
import {DiAppstore} from 'react-icons/di';
import {IoIosBrush,IoMdStats} from 'react-icons/io';

export const ServicesData = [
  {
    title: 'Web Development',
    description:'Nunc et risus id ligula consequat maximus. Vestibulum semper lacus eget tempus condimentum.',
    icon: <FiCode />
  },
  {
    title: 'Web Design',
    description:'Nunc et risus id ligula consequat maximus. Vestibulum semper lacus eget tempus condimentum. ',
    icon: <DiAppstore />
  },
  {
    title: 'Responsive Development',
    description:'Nunc et risus id ligula consequat maximus. Vestibulum semper lacus eget tempus condimentum. ',
    icon: <FaMobileAlt />
  },
  {
    title:'SEO',
    description: 'Nunc et risus id ligula consequat maximus. Vestibulum semper lacus eget tempus',
    icon: <FiSearch />
  },
  {
    title:'Graphic Design',
    description:'Nunc et risus id ligula consequat maximus. Vestibulum ',
    icon: <IoIosBrush />
  },
  {
    title: 'Marketing Services',
    description: 'Nunc et risus id ligula consequat maximus. Vestibulum',
    icon: <IoMdStats />
  }
]