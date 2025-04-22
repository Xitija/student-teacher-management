import React from 'react';
import { SiPostman, SiGithub } from 'react-icons/si';
import { FaServer } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer
      className="flex text-white justify-between items-center text-center py-1 px-2"
      style={{ backgroundColor: '#003366' }}
    >
      <p>
        Made with ♥ by
        <a
          href="https://xitija.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {' '}
          Xitija
        </a>
      </p>
      <div className="flex space-x-2">
        <div>
          <a
            href="https://github.com/Xitija/student-teacher-management"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <SiGithub size={20} className="inline-block" />
          </a>
        </div>
        <div>
          <a
            href="https://documenter.getpostman.com/view/29778371/2sAYBbf9xG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <SiPostman size={20} className="inline-block" />
          </a>
        </div>
        <div>
          <a
            href="https://schoolmanagementapis.onrender.com/api-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <FaServer size={20} className="inline-block" />
          </a>
        </div>
        <div>
          <a
            className="text-blue-400 hover:underline"
            target='_blank'
            rel="noopener noreferrer"
            href="https://www.freepik.com/free-vector/flat-nursery-school-horizontal-sale-banner-template_30122690.htm#position=1"
          >
            Image by freepik
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
