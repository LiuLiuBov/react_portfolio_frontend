import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.instagram.com/liu_poliakova" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/LiuLiuBov" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/liubov-poliakova-b457212b8" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

    </div>
  );
};

export default SocialMedia;
