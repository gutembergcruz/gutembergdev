import Image from "next/image";
import { Title } from "./Title";

import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import tsImg from '../assets/ts.png'
import reactImg from '../assets/react.png'
import rnImg from '../assets/rn.png'
import nodeImg from '../assets/node.png'
import solidityImg from '../assets/solidity.png'
import figmaImg from '../assets/figma.png'
import gitImg from '../assets/git.png'
import nextImg from '../assets/next.png'

export function Skills() {
  return (
    <div className="skills bg-dk-150">
      <Title text="Skills" />
      <div className="skills-box">
        <div className="skills-item bg-dk-50">
          <Image src={htmlImg} alt="HTML5" title="HTML5"/>
          <p>HTML5</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={cssImg} alt="CSS3" title="CSS3"/>
          <p>CSS3</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={reactImg} alt="React" title="React"/>
          <p>React</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={nextImg} alt="Next.js" title="Next.js"/>
          <p>Next.js</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={rnImg} alt="React Native" title="React Native"/>
          <p>React Native</p>
        </div>
      </div>
      <div className="skills-box">
        <div className="skills-item bg-dk-50">
          <Image src={tsImg} alt="Typescript" title="Typescript"/>
          <p>Typescript</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={nodeImg} alt="Node.js" title="Node.js"/>
          <p>Node.js</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={solidityImg} alt="Solidity" title="Solidity"/>
          <p>Solidity</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={gitImg} alt="Git" title="Git"/>
          <p>Git</p>
        </div>
        <div className="skills-item bg-dk-50">
          <Image src={figmaImg} alt="Figma" title="Figma"/>
          <p>Figma</p>
        </div>
      </div>
    </div>
  )
}