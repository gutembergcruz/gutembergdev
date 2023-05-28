import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import tsImg from '../assets/ts.png'
import reactImg from '../assets/react.png'
import rnImg from '../assets/rn.png'
import nodeImg from '../assets/node.png'
import solidityImg from '../assets/solidity.png'
import figmaImg from '../assets/figma.png'
import gitImg from '../assets/git.png'
import jsImg from '../assets/js.png'
import metamaskImg from '../assets/metamask.png'
import flutterImg from '../assets/flutter.png'
import jqueryImg from '../assets/jquery.png'
import nextImg from '../assets/next.png'
import angularImg from '../assets/angular.png'

import Image from 'next/image'

export function Techs(props: any){
  return(
    <div className="techs">
      {props.html && <div><Image src={htmlImg} alt='HTML'/> <p>HTML</p> </div>}
      {props.css && <div><Image src={cssImg} alt='CSS'/> <p>CSS</p> </div>}
      {props.ts && <div><Image src={tsImg} alt='ts'/> <p>Typescript</p> </div>}
      {props.react && <div><Image src={reactImg} alt='react'/> <p>React.js</p> </div>}
      {props.rn && <div><Image src={rnImg} alt='rn'/> <p>React Native</p> </div>}
      {props.node && <div><Image src={nodeImg} alt='node'/> <p>Node.js</p> </div>}
      {props.solidity && <div><Image src={solidityImg} alt='solidity'/> <p>Solidity</p> </div>}
      {props.figma && <div><Image src={figmaImg} alt='figma'/> <p>Figma</p> </div>}
      {props.git && <div><Image src={gitImg} alt='git'/> <p>Git</p> </div>}
      {props.next && <div><Image src={nextImg} alt='next'/> <p>Next.js</p> </div>}
      {props.js && <div><Image src={jsImg} alt='js'/> <p>Javascript</p> </div>}
      {props.metamask && <div><Image src={metamaskImg} alt='metamask'/> <p>Metamask</p> </div>}
      {props.jquery && <div><Image src={jqueryImg} alt='jquery'/> <p>jQuery</p> </div>}
      {props.flutter && <div><Image src={flutterImg} alt='flutter'/> <p>Flutter</p> </div>}
      {props.angular && <div><Image src={angularImg} alt='angular'/> <p>Angular</p> </div>}
    </div>
  )
}