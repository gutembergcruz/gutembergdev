import Link from 'next/link';
import { ImageHero } from './ImageHero'

import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';


export function Hero() {
  return (
    <div className="hero">
      <div className="hero-box">
        <div className='relative'>
          <p className='opa'>Opa, bão?</p>
        </div>
        <div className="flex items-end justify-between">
          <div className='hero-name'>
            <h1>Eu sou o<br />Gutemberg Cruz</h1>
            <span></span>
            <h2>Desenvolvedor Web FullStack</h2>
          </div>
          <div className='hero-social'>
            <p>Me siga</p>
            <span></span>
            <Link href="https://github.com/gutembergcruz" target="_blank" rel="noopener noreferrer" title='Github'>
              <FiGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/gutembergcruz/" target="_blank" rel="noopener noreferrer" title='Linkedin'>
              <FiLinkedin />
            </Link>
            <Link href="https://www.instagram.com/gut.cruz/" target="_blank" rel="noopener noreferrer" title='Instagram'>
              <FiInstagram />
            </Link>
          </div>
        </div>
        <ImageHero />
      </div>
    </div>
  )
}