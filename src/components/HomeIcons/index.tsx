import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaSteam } from 'react-icons/fa'

const HomeIcons = () => {
  return (
    <div className="w-4/5 justify-between flex">
      <div>
        <a href="https://steamcommunity.com/profiles/76561198851052012">
          <FaSteam size={30} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/mohamad-hasan-sarabadani-0a1935277/">
          <FaLinkedin size={30} />
        </a>
      </div>
      <div>
        <a href="https://github.com/RubikMH">
          <FaGithub size={30} />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/rubiik.mh/">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  )
}

export default HomeIcons
