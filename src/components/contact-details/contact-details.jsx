import React from 'react'
import './contact-details.scss';
// import {IoLocation} from 'react-icons/io';
import {AiTwotonePhone} from 'react-icons/ai';
import {ImLocation} from 'react-icons/im';
import {HiMail} from 'react-icons/hi';
import {FaLinkedinIn,FaGithub,FaInstagram,FaTelegram} from 'react-icons/fa';

const ContactDetails = () => (
  <div className="contact-details">
    <div className="title-box-2">
      <h5 className="title-left">
        Get In Touch
      </h5>
    </div>

    <div className="more-info">
      <p className="lead">
          if you would like to get in touch with me please use the following.I'am available
          24/7 in any of these social Media such as Telegram,Instagram,Github,Linkedin.Though, I'm 
          mostly in Telegram so you might wanna consider that.
      </p>
      <ul className="list-ico">
        <li><span><ImLocation /></span> Katta Qani 4 street,Uchtepa District,Tashkent</li>
        <li><span><AiTwotonePhone /></span> +998 99 803 52 19</li>
        <li><span><HiMail /></span> abdurakhimov.sardor@gmail.com </li>
      </ul>
    </div>

    <div className="socials">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/sardor-abdurakhimov-6a4b6b199/" target="_blank" rel="noreferrer">
            <span className="ico-circle" ><FaLinkedinIn /></span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Sardor2" target="_blank" rel="noreferrer">
            <span className="ico-circle" ><FaGithub /></span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/abdurakhimov550/" target="_blank" rel="noreferrer">
            <span className="ico-circle" ><FaInstagram /></span>
          </a>
        </li>
        <li>
          <a href="https://t.me/akaThatGuy" target="_blank" rel="noreferrer">
            <span className="ico-circle" ><FaTelegram /></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default ContactDetails;