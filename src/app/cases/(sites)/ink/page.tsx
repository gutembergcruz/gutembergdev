import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/ink.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Ink Quality" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            InkQuality is a website specialized in providing information and reviews about printer ink cartridges and toners. Aiming to assist users in choosing quality products compatible with their printers, InkQuality offers detailed evaluations and comparisons between different brands and models.
            <br />
            <br />
            On the website, visitors will find useful tips on how to choose the most suitable ink cartridges or toners for their needs, as well as information on proper care and maintenance to ensure high-quality printing. InkQuality aims to be a reliable resource for those who want to make informed decisions when purchasing printer supplies, offering unbiased reviews and helpful guidance.
          </p>
          <br />
          <p>✅ Briefing</p>
          <p>✅ UI Design</p>
          <p>✅ Front End Developmen</p>
          <p>✅ SEO</p>
          <h4>Technologies Used</h4>
          <Techs html css jquery js git figma />
          <Associate c />
        </div>
        <div className="fullpage">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link
        href="/cases"
        className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center"
      >
        Go back
      </Link>
    </div>
  );
}
