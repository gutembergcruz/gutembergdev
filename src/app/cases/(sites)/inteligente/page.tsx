import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/inteligente.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="InteliGente" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            InteliGente is a company specialized in career consulting, offering personalized guidance and effective strategies to help professionals achieve their career goals. With an intelligent and experienced approach, InteliGente assists clients in identifying their skills, interests, and objectives, providing an action plan to boost their careers.
            <br />
            <br />
            Through services such as professional profile analysis, resume development, interview coaching, and networking guidance, InteliGente empowers individuals to stand out in the job market and seize emerging opportunities. With a team of experienced consultants and up-to-date knowledge of market trends, InteliGente is a trusted partner for those seeking strategic direction and specialized support in advancing their careers.
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
