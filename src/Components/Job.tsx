import Image from "next/image";
import { Title } from "./Title";

import losangoImg from '../assets/losango.png';

export function Job() {
  return (
    <div className="job bg-dk-100">
      <div className="job-box">
        <Title text="My Focus" />
        <Image className="losango-img" src={losangoImg} alt="" />
        <p className="text-white-100">
        With a solid 7 years of experience in web development, my main goal is to help <br /> <span>your project</span> to achieve strong <span>search engine visibility</span>, <br />by delivering an optimized browsing <span>experience</span> through a <br /><span>clean and intuitive</span> interface.
      </p>
      </div>
    </div>
  )
}